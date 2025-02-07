import { FoodItemService } from './food-item.service';
import { CreateFoodItemDto } from './dto/create-food-item.dto';
import { UpdateFoodItemDto } from './dto/update-food-item.dto';
import { FoodItem } from './entities/food-item.entity';
export declare class FoodItemController {
    private readonly foodItemService;
    constructor(foodItemService: FoodItemService);
    create(createFoodItemDto: CreateFoodItemDto): Promise<FoodItem>;
    findAll(): Promise<FoodItem[]>;
    findOne(id: number): Promise<FoodItem>;
    update(id: number, updateFoodItemDto: UpdateFoodItemDto): Promise<FoodItem>;
    remove(id: number): Promise<FoodItem>;
}
