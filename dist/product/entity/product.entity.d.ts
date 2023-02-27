import { Category } from './category';
import { Discount } from './discount.entity';
import { ProductVariant } from './productVariant.entity';
import { Review } from './review.entity';
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
    discount: Discount;
    review: Review;
    productVariant: ProductVariant[];
}
