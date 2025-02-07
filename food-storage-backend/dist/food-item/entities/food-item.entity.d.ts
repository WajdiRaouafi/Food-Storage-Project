import { User } from '../../user/entities/user.entity';
export declare class FoodItem {
    id: number;
    name: string;
    quantity: number;
    expirationDate: Date;
    description: string;
    user: User;
}
