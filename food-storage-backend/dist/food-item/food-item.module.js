"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodItemModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const food_item_service_1 = require("./food-item.service");
const food_item_controller_1 = require("./food-item.controller");
const food_item_entity_1 = require("./entities/food-item.entity");
let FoodItemModule = class FoodItemModule {
};
exports.FoodItemModule = FoodItemModule;
exports.FoodItemModule = FoodItemModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([food_item_entity_1.FoodItem])],
        controllers: [food_item_controller_1.FoodItemController],
        providers: [food_item_service_1.FoodItemService],
    })
], FoodItemModule);
//# sourceMappingURL=food-item.module.js.map