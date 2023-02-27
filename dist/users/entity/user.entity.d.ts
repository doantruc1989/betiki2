import { Review } from 'src/product/entity/review.entity';
export declare enum Role {
    User = "user",
    Admin = "admin"
}
export declare class User {
    id: number;
    email: string;
    address: string;
    username: string;
    phone: string;
    password: string;
    image: string;
    role: Role[];
    refreshToken?: string;
    createdAt: Date;
    review: Review;
}
