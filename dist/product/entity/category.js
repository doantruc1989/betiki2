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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
let Category = class Category {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'category', length: 75, nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Category.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Category.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { default: () => "'0'" }),
    __metadata("design:type", Number)
], Category.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.categoryID),
    __metadata("design:type", Array)
], Category.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'datetime',
        name: 'createdAt',
    }),
    __metadata("design:type", Date)
], Category.prototype, "createdAt", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)('category')
], Category);
exports.Category = Category;
//# sourceMappingURL=category.js.map