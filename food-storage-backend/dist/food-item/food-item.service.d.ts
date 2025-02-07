import { Repository } from 'typeorm';
import { FoodItem } from './entities/food-item.entity';
import { CreateFoodItemDto } from './dto/create-food-item.dto';
import { UpdateFoodItemDto } from './dto/update-food-item.dto';
export declare class FoodItemService {
    private foodItemRepository;
    constructor(foodItemRepository: Repository<FoodItem>);
    create(createFoodItemDto: CreateFoodItemDto): Promise<FoodItem>;
    findAll(): Promise<FoodItem[]>;
    findOne(id: number): Promise<FoodItem>;
    update(id: number, updateFoodItemDto: UpdateFoodItemDto): Promise<FoodItem>;
    remove(id: number): Promise<FoodItem>;
}
