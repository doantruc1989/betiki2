import EditCategoryDto from './dto/editCategory.tdo';
import EditProductDto from './dto/editProduct.dto';
import NewCategoryDto from './dto/newCategory.dto';
import NewProductDto from './dto/newProduct.dto';
import SearchProductDto from './dto/searchProduct.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAllProduct(page: number): Promise<import("./entity/product.entity").Product[]>;
    getProductwithCat(searchProductDto: SearchProductDto): Promise<import("./entity/product.entity").Product[]>;
    createNewProduct(newProductDto: NewProductDto): Promise<import("typeorm").InsertResult>;
    getProduct(id: any): Promise<import("./entity/product.entity").Product[]>;
    getProductByCategory(id: number): Promise<import("./entity/category").Category[]>;
    listCategory(): Promise<import("./entity/category").Category[]>;
    editCategory(id: number, editCategory: EditCategoryDto): Promise<import("./entity/category").Category>;
    deleteCategory(id: number): Promise<void>;
    newCategory(newCategory: NewCategoryDto): Promise<NewCategoryDto & import("./entity/category").Category>;
    get6Product(): Promise<import("./entity/product.entity").Product[]>;
    editProduct(id: number, editProductDto: EditProductDto): Promise<import("./entity/product.entity").Product>;
    deleteProduct(id: number): Promise<void>;
    checkQty(): Promise<import("./entity/product.entity").Product[]>;
}
