"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const food_item_module_1 = require("./food-item/food-item.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const food_item_entity_1 = require("./food-item/entities/food-item.entity");
const user_entity_1 = require("./user/entities/user.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'mysql.cqwskvvvmkuu.us-east-1.rds.amazonaws.com',
                port: 3306,
                username: 'admin',
                password: 'admin112233',
                database: 'food_storage',
                entities: [food_item_entity_1.FoodItem, user_entity_1.User],
                synchronize: true,
                logging: true,
                charset: 'utf8mb4',
            }),
            food_item_module_1.FoodItemModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map