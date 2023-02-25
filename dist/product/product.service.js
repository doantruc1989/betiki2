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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entity/product.entity");
const category_1 = require("./entity/category");
let ProductService = class ProductService {
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    async createProduct(newProductDto) {
        const product = await this.productRepository
            .createQueryBuilder("product")
            .leftJoinAndSelect("product.categoryID", "category")
            .insert()
            .into(product_entity_1.Product)
            .values(newProductDto)
            .execute();
        return product;
    }
    async listAllCategory() {
        return await this.categoryRepository.find();
    }
    async getProductbyCat(searchProductDto) {
        const products = await this.productRepository.createQueryBuilder('product');
        if (searchProductDto.search === "searchall") {
            return products
                .where(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .orWhere(`LOWER(id) LIKE '%${searchProductDto.sortBy}%'`)
                .orWhere(`LOWER(price) LIKE '%${searchProductDto.sortBy}%'`)
                .orWhere(`LOWER(content) LIKE '%${searchProductDto.sortBy}%'`)
                .orWhere(`LOWER(category) LIKE '%${searchProductDto.sortBy}%'`)
                .take(10)
                .getMany();
        }
        if (searchProductDto.search === "adminasc") {
            return products
                .orderBy(`product.${searchProductDto.sortBy}`, 'ASC')
                .getMany();
        }
        if (searchProductDto.search === "admindesc") {
            return products
                .orderBy(`product.${searchProductDto.sortBy}`, 'DESC')
                .getMany();
        }
        if (searchProductDto.search === "random") {
            return products
                .select()
                .orderBy('RAND()')
                .take(18)
                .getMany();
        }
        if (searchProductDto.search === "danhchoban") {
            return products
                .where({ category: searchProductDto.category })
                .orderBy(`product.price`, 'ASC')
                .getMany();
        }
        if (searchProductDto.search === "dichvuso") {
            return products
                .where({ category: searchProductDto.category })
                .orderBy(`product.price`, 'ASC')
                .getMany();
        }
        if (searchProductDto.search === "dealsieuhot") {
            return products
                .where({ category: searchProductDto.category })
                .orderBy(`product.price`, 'ASC')
                .getMany();
        }
        if (searchProductDto.search === "revodoi") {
            return products
                .where({ category: searchProductDto.category })
                .orderBy(`product.price`, 'ASC')
                .getMany();
        }
        if (searchProductDto.search === "thoitrang") {
            return products
                .where({ category: searchProductDto.category })
                .orderBy(`product.price`, 'ASC')
                .getMany();
        }
        if (searchProductDto.search === "trending") {
            return products
                .where({ category: searchProductDto.category })
                .orderBy(`product.price`, 'ASC')
                .getMany();
        }
        if (searchProductDto.search === "phobien") {
            return products.where({ category: searchProductDto.category })
                .getMany();
        }
        ;
        if (searchProductDto.search === "asc") {
            return products
                .where({ category: searchProductDto.category })
                .orderBy(`product.${searchProductDto.sortBy}`, 'ASC')
                .getMany();
        }
        if (searchProductDto.search === "desc") {
            return products
                .where({ category: searchProductDto.category })
                .orderBy(`product.${searchProductDto.sortBy}`, 'DESC')
                .getMany();
        }
        if (searchProductDto.search === 'gia2') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere({ price: (0, typeorm_2.MoreThanOrEqual)(searchProductDto.fromPrice) })
                .andWhere({ price: (0, typeorm_2.LessThanOrEqual)(searchProductDto.toPrice) })
                .getMany();
        }
        if (searchProductDto.search === 'gia3') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere({ price: (0, typeorm_2.MoreThanOrEqual)(searchProductDto.fromPrice) })
                .andWhere({ price: (0, typeorm_2.LessThanOrEqual)(searchProductDto.toPrice) })
                .getMany();
        }
        if (searchProductDto.search === 'gia4') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere({ price: (0, typeorm_2.MoreThanOrEqual)(searchProductDto.fromPrice) })
                .andWhere({ price: (0, typeorm_2.LessThanOrEqual)(searchProductDto.toPrice) })
                .getMany();
        }
        if (searchProductDto.search === 'gia1') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere({ price: (0, typeorm_2.MoreThanOrEqual)(searchProductDto.fromPrice) })
                .andWhere({ price: (0, typeorm_2.LessThanOrEqual)(searchProductDto.toPrice) })
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc1') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc2') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc3') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc4') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc5') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc6') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc7') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc8') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        if (searchProductDto.search === 'danhmuc9') {
            return products
                .where({ category: searchProductDto.category })
                .andWhere(`LOWER(productName) LIKE '%${searchProductDto.sortBy}%'`)
                .getMany();
        }
        return products.getMany();
    }
    async adminEditCategory(id, editCategory) {
        const category = await this.categoryRepository.findOneBy({ id });
        category.category = editCategory.category;
        category.image = editCategory.image;
        category.path = editCategory.path;
        category.parentId = editCategory.parentId;
        const updatedCategory = await this.categoryRepository.save(category);
        return updatedCategory;
    }
    async adminDeleteCategory(id) {
        try {
            await this.categoryRepository.delete(id);
        }
        catch (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('deleted');
            }
        }
    }
    async adminNewCategory(newCategory) {
        return await this.categoryRepository.save(newCategory);
    }
    async listProduct(page) {
        const products = await this.productRepository
            .createQueryBuilder("product")
            .leftJoinAndSelect("product.categoryID", "category")
            .skip(16 * (page - 1))
            .take(16)
            .getMany();
        return products;
    }
    async list6Product() {
        const products = await this.productRepository.find({ take: 6 });
        return products;
    }
    async getProductById(id) {
        const product = await this.productRepository
            .createQueryBuilder("product")
            .leftJoinAndSelect("product.categoryID", "category")
            .where({ id: id })
            .getMany();
        return product;
    }
    async getByCategory(id) {
        const products = await this.categoryRepository.find({
            where: { id: id },
        });
        return products;
    }
    async editProduct(id, editProductDto) {
        const product = await this.productRepository.findOneBy({ id });
        product.category = editProductDto.category;
        product.content = editProductDto.content;
        product.image = editProductDto.image;
        product.price = editProductDto.price;
        product.initialPrice = editProductDto.initialPrice;
        product.productName = editProductDto.productName;
        product.quantity = editProductDto.quantity;
        const updatedProduct = this.productRepository.save(product);
        return updatedProduct;
    }
    async deleteThisProduct(id) {
        try {
            await this.productRepository.delete(id);
        }
        catch (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('deleted');
            }
        }
    }
    async adminCheckQty() {
        return await this.productRepository.find({
            where: { quantity: (0, typeorm_2.LessThanOrEqual)(40) },
        });
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(category_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map