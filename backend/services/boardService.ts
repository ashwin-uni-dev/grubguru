import mongoose, { Model, Types } from 'mongoose';
import {Board, IBoard} from "../schemas/board";
import {Store} from '../schemas/store';

new Store();

export class BoardService {
    static create() {
        return new BoardService(Board);
    }

    constructor(
        private boardModel: Model<IBoard>,
    ) {}


    async getBoards(userId: number): Promise<IBoard[]> {
        try {
            const boards = await this.boardModel.find({ userId }).lean();
            return boards;
        } catch (error: any) {
            console.error(`Error fetching boards for user ${userId}:`, error.message || error);
            throw new Error('Failed to retrieve user boards.');
        }
    }

    async getBoard(userId: number, boardName: string): Promise<IBoard | null> {
        try {
            console.log('Registered models:', mongoose.modelNames());
            const board = await this.boardModel.findOne({ userId, boardName })
                .populate({
                    path: 'foods',
                    populate: {
                        path: 'storeInfo',
                    }
                })
                .lean();

            return board;
        } catch (error: any) {
            console.error(`Error fetching board '${boardName}' for user ${userId}:`, error.message || error);
            throw new Error('Failed to retrieve board.');
        }
    }

    async createBoard(userId: number, boardName: string): Promise<IBoard> {
        try {
            const existingBoard = await this.boardModel.findOne({ userId, boardName });
            if (existingBoard) {
                throw new Error(`Board with name '${boardName}' already exists for user ${userId}.`);
            }

            const newBoard = new this.boardModel({
                userId,
                boardName,
                foods: []
            });

            const savedBoard = await newBoard.save();
            return savedBoard;
        } catch (error: any) {
            console.error(`Error creating board '${boardName}' for user ${userId}:`, error.message || error);
            throw new Error(`Failed to create board: ${error.message || 'Unknown error'}`);
        }
    }

    async addToBoard(userId: number, boardName: string, foodId: string): Promise<IBoard> {
        try {
            const foodObjectId = new Types.ObjectId(foodId);

            const updatedBoard = await this.boardModel.findOneAndUpdate(
                { userId, boardName },
                { $addToSet: { foods: foodObjectId } },
                { new: true, runValidators: true }
            );

            if (!updatedBoard) {
                throw new Error(`Board '${boardName}' not found for user ${userId}.`);
            }

            return updatedBoard;
        } catch (error: any) {
            console.error(`Error adding food ${foodId} to board '${boardName}' for user ${userId}:`, error.message || error);
            // Check for Mongoose CastError specifically for invalid ObjectId
            if (error instanceof mongoose.Error.CastError && error.path === '_id') {
                throw new Error('Invalid food ID format.');
            }
            throw new Error(`Failed to add food to board: ${error.message || 'Unknown error'}`);
        }
    }
}
