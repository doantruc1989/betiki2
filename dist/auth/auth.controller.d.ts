import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    signin(data: AuthDto): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        roles: import("../users/entity/user.entity").Role[];
        id: number;
        username: string;
        image: string;
    }>;
    logout(req: Request): void;
    refreshTokens(req: Request): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        id: number;
        username: string;
        image: string;
    }>;
}
