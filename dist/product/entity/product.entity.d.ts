import { SharedProp } from 'src/users/entity/sharedProp.helper';
export declare class Product extends SharedProp {
    id: number;
    productName: string;
    price: number;
    initialPrice: number;
    quantity: number;
    image: string;
    category: string;
    brand: string;
    content: string | null;
}
