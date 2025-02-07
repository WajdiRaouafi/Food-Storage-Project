"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodItemSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FoodItemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    expirationDate: { type: Date, required: true },
});
//# sourceMappingURL=food.item.schema.js.map