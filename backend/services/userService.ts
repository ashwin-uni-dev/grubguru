import mongoose, { Model } from 'mongoose';
import {User, IUser} from "../schemas/user";
import {FoodService} from "./foodService";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export class UserService {
    static create() {
        return new UserService(User, FoodService.create());
    }

    constructor(
        private userModel: Model<IUser>,
        private foodService: FoodService
    ) {}

    private async getUserById(id: number): Promise<IUser> {
        const user = await this.userModel.findOne({ id });
        if (!user) {
            throw new Error(`User with id ${id} not found.`);
        }
        return user;
    }

    async createUser(username: string, password: string) {
        try {
            const existingUser = await this.userModel.findOne({ username });

            if (existingUser) {
                throw new Error('User with this username already exists.');
            }

            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

            const newUser = new this.userModel({
                username,
                password: hashedPassword,
                id: Math.floor(Math.random() * Math.pow(10, 10))
            });

            await newUser.save();
        } catch (error: any) {
            console.error('Error creating user:', error.message || error);
            throw new Error(`Failed to create user: ${error.message || 'Unknown error'}`);
        }
    }

    async authenticateUser(username: string, password: string) {
        const existingUser = await this.userModel.findOne({ username });
        if (!existingUser) { return null }

        const validPassword = await bcrypt.compare(password, existingUser.password)
        if (validPassword) return existingUser;

        return null;
    }

    async getPresets(id: number): Promise<any> {
        try {
            const user: IUser = await this.userModel.findOne({ id }) as IUser;
            return user.presets;
        }catch (error) {
            console.error('Error fetching foods:', error);
            throw new Error('Failed to retrieve food items.');
        }
    }

    async addPreset(id: number, preset: any): Promise<any> {
        try {
            const user = await this.userModel.findOne({ id });

            if (!user) {
                throw new Error(`User with id ${id} not found.`);
            }

            const existingIndex = user.presets.findIndex((p: any) => p.id === preset.id);

            if (existingIndex >= 0) {
                user.presets[existingIndex] = preset;
            } else {
                user.presets.push(preset);
            }

            await user.save();
            return user.presets;
        } catch (error) {
            console.error('Error adding/updating preset:', error);
            throw new Error('Failed to add or update preset.');
        }
    }

    async getLikedFoods(id: number): Promise<any[]> {
        try {
            const user = await this.userModel.findOne({ id });

            if (!user) {
                throw new Error(`User with id ${id} not found.`);
            }

            const likedFoodIds = user.likes || [];

            const pipeline = [
                {
                    $match: {
                        '_id': { $in: likedFoodIds.map((id: string) => new mongoose.Types.ObjectId(id)) }
                    }
                }
            ];

            return await this.foodService.runPipelineWithStoreInfo(pipeline);
        } catch (error: any) { // Use 'any' for error type if not specific error classes are handled
            console.error('Error fetching and enriching liked foods:', error.message || error);
            throw new Error('Failed to retrieve and process liked foods.');
        }
    }

    async doesLike(id: number, foodId: string): Promise<boolean> {
        try {
            const user = await this.userModel.findOne({ id });

            if (!user) {
                throw new Error(`User with id ${id} not found.`);
            }

            const likedFoodIds = user.likes || [];
            return likedFoodIds.includes(foodId);
        } catch (error: any) {
            console.error('Error fetching and enriching liked foods:', error.message || error);
            throw new Error('Failed to retrieve and process liked foods.');
        }
    }

    async toggleFoodLike(id: number, foodId: string): Promise<any> {
        try {
            const user = await this.userModel.findOne({ id });

            if (!user) {
                throw new Error(`User with id ${id} not found.`);
            }

            const foodLikeIndex = user.likes.findIndex((like: any) => like == foodId);

            if (foodLikeIndex >= 0) {
                user.likes.splice(foodLikeIndex, 1);
            } else {
                user.likes.push(foodId);
            }

            await user.save();
            return user.presets;
        } catch (error: any) {
            console.error('Error adding/updating food like:', error);
            throw new Error('Failed to add or update preset.');
        }
    }

    async findUsersBySearch(search: string) {
        try {
            return await this.userModel.find({
                username: { $regex: search, $options: 'i' }
            });
        }catch (error: any) {
            console.log('Error finding user by search:', error.message || error);
            throw new Error('Failed to find users by search.');
        }
    }

    async addFriend(id: number, followedUsername: string) {
        try {
            const user = await this.getUserById(id);
            const followedUser = await this.userModel.findOne({ username: followedUsername });

            user.following.push(followedUsername);
            followedUser!.followers.push(user.username);

            await user.save();
            await followedUser!.save();
        } catch (error: any) {
            console.log('Error adding friend:', error.message || error);
        }
    }

    async getFriends(id: number) {
        try {
            const user = await this.getUserById(id);

            return await this.userModel.find({
                username: { $in: user.following }
            }).exec();
        } catch (error: any) {
            console.log('Error finding friends', error.message || error);
        }
    }

    async removeFriend(id: number, username: string) {
        try {
            const user = await this.getUserById(id);
            const unfollowedUser = await this.userModel.findOne({ username });

            user.following = user.following.filter((friend: string) => friend !== username);
            unfollowedUser!.followers = unfollowedUser!.followers.filter((friend: string) => friend !== user.username);

            await unfollowedUser!.save();
            await user.save();
        } catch (error: any) {
            console.log('Error removing friend:', error.message || error);
        }
    }
}