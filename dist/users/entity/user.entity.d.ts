import { SharedProp } from './sharedProp.helper';
export declare enum Role {
    User = "user",
    Admin = "admin"
}
export declare class User extends SharedProp {
    id: number;
    email: string;
    address1: string;
    address2: string;
    address3: string;
    name: string;
    password: string;
    image: string;
    role: Role[];
    refreshToken?: string;
}
