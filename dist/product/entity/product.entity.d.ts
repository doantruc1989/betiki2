import { Category } from './category';
export declare class Product {
    id: number;
    productName: string;
    price: number;
    initialPrice: number;
    quantity: number;
    image: string;
    category: string;
    brand: string;
    path: string;
    content: string | null;
    createdAt: Date;
    categoryID: Category;
}
