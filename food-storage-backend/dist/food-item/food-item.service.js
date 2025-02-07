"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodItemService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const food_item_entity_1 = require("./entities/food-item.entity");
let FoodItemService = class FoodItemService {
    constructor(foodItemRepository) {
        this.foodItemRepository = foodItemRepository;
    }
    create(createFoodItemDto) {
        const foodItem = this.foodItemRepository.create(createFoodItemDto);
        return this.foodItemRepository.save(foodItem);
    }
    findAll() {
        return this.foodItemRepository.find();
    }
    findOne(id) {
        return this.foodItemRepository.findOne({ where: { id } });
    }
    async update(id, updateFoodItemDto) {
        await this.foodItemRepository.update(id, updateFoodItemDto);
        return this.findOne(id);
    }
    async remove(id) {
        const foodItem = await this.findOne(id);
        return this.foodItemRepository.remove(foodItem);
    }
};
exports.FoodItemService = FoodItemService;
exports.FoodItemService = FoodItemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(food_item_entity_1.FoodItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FoodItemService);
//# sourceMappingURL=food-item.service.js.map