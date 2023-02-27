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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const category_1 = require("./category");
const discount_entity_1 = require("./discount.entity");
const productVariant_entity_1 = require("./productVariant.entity");
const review_entity_1 = require("./review.entity");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'productName' }),
    __metadata("design:type", String)
], Product.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'price', precision: 12, default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'initialPrice', precision: 12, default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "initialPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'quantity', default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Product.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Product.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: () => 'CURRENT_TIMESTAMP',
        type: 'datetime',
        name: 'createdAt',
    }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_1.Category, (category) => category.productId),
    __metadata("design:type", category_1.Category)
], Product.prototype, "categoryID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => discount_entity_1.Discount, (discount) => discount.product),
    __metadata("design:type", discount_entity_1.Discount)
], Product.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => review_entity_1.Review, (review) => review.product),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", review_entity_1.Review)
], Product.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => productVariant_entity_1.ProductVariant, (productVariant) => productVariant.product),
    __metadata("design:type", Array)
], Product.prototype, "productVariant", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)('product')
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map