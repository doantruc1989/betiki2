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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const editCategory_tdo_1 = require("./dto/editCategory.tdo");
const editProduct_dto_1 = require("./dto/editProduct.dto");
const newCategory_dto_1 = require("./dto/newCategory.dto");
const newProduct_dto_1 = require("./dto/newProduct.dto");
const searchProduct_dto_1 = require("./dto/searchProduct.dto");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getAllProduct(page) {
        return this.productService.listProduct(page);
    }
    async getProductwithCat(searchProductDto) {
        return this.productService.getProductbyCat(searchProductDto);
    }
    async createNewProduct(newProductDto) {
        return this.productService.createProduct(newProductDto);
    }
    async getProduct(id) {
        return this.productService.getProductById(id);
    }
    async getProductByCategory(id) {
        return this.productService.getByCategory(id);
    }
    async listCategory() {
        return this.productService.listAllCategory();
    }
    async editCategory(id, editCategory) {
        return this.productService.adminEditCategory(id, editCategory);
    }
    async deleteCategory(id) {
        return this.productService.adminDeleteCategory(id);
    }
    async newCategory(newCategory) {
        return this.productService.adminNewCategory(newCategory);
    }
    async get6Product() {
        return this.productService.list6Product();
    }
    async editProduct(id, editProductDto) {
        return this.productService.editProduct(id, editProductDto);
    }
    async deleteProduct(id) {
        return this.productService.deleteThisProduct(id);
    }
    async checkQty() {
        return this.productService.adminCheckQty();
    }
};
__decorate([
    (0, common_1.Get)('product'),
    __param(0, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, common_1.Get)('product/all'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchProduct_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductwithCat", null);
__decorate([
    (0, common_1.Post)('product/createNewProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [newProduct_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createNewProduct", null);
__decorate([
    (0, common_1.Get)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Get)('category/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductByCategory", null);
__decorate([
    (0, common_1.Get)('listcategory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "listCategory", null);
__decorate([
    (0, common_1.Post)('category/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, editCategory_tdo_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "editCategory", null);
__decorate([
    (0, common_1.Delete)('category/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteCategory", null);
__decorate([
    (0, common_1.Post)('newcategory'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [newCategory_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "newCategory", null);
__decorate([
    (0, common_1.Get)('getSixproduct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "get6Product", null);
__decorate([
    (0, common_1.Post)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, editProduct_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "editProduct", null);
__decorate([
    (0, common_1.Delete)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Get)('lowquantity'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "checkQty", null);
ProductController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('Product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map