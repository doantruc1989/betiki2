import { Repository } from 'typeorm';
import EditProductDto from './dto/editProduct.dto';
import NewProductDto from './dto/newProduct.dto';
import { Product } from './entity/product.entity';
import { Category } from './entity/category';
import NewCategoryDto from './dto/newCategory.dto';
import EditCategoryDto from './dto/editCategory.tdo';
import SearchProductDto from './dto/searchProduct.dto';
export declare class ProductService {
    private productRepository;
    private categoryRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>);
    createProduct(newProductDto: NewProductDto): Promise<NewProductDto & Product>;
    listAllCategory(): Promise<Category[]>;
    getProductbyCat(searchProductDto: SearchProductDto): Promise<Product[]>;
    adminEditCategory(id: number, editCategory: EditCategoryDto): Promise<Category>;
    adminDeleteCategory(id: number): Promise<void>;
    adminNewCategory(newCategory: NewCategoryDto): Promise<NewCategoryDto & Category>;
    listProduct(page?: number): Promise<Product[]>;
    list6Product(): Promise<Product[]>;
    getProductById(id: any): Promise<Product>;
    getByCategory(name: string): Promise<Product[]>;
    editProduct(id: number, editProductDto: EditProductDto): Promise<Product>;
    deleteThisProduct(id: number): Promise<void>;
    adminCheckQty(): Promise<Product[]>;
}
