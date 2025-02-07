import { FoodItem } from '../../food-item/entities/food-item.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    foodItems: FoodItem[];
    comparePassword(candidatePassword: string): Promise<boolean>;
}
