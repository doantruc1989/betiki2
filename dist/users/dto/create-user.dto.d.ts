import { Role } from "../entity/user.entity";
export declare class CreateUserDto {
    email: string;
    username: string;
    password: string;
    image: string;
    role: Role[];
    phone?: string;
    refreshToken?: string;
    address?: string;
}
