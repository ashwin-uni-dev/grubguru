import { Model } from 'mongoose';
import {User, IUser} from "../schemas/user";

export class UserService {
    static create() {
        return new UserService(User);
    }

    constructor(
        private userModel: Model<IUser>
    ) {}

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

}