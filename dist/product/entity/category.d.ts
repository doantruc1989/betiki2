import { Product } from './product.entity';
export declare class Category {
    id: number;
    category: string;
    image: string;
    path: string;
    parentId: number;
    productId: Product[];
    createdAt: Date;
}
