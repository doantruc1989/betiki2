import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    signUp(createUserDto: CreateUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    signIn(data: AuthDto): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        roles: import("../users/entity/user.entity").Role[];
        id: number;
        username: string;
        image: string;
        address: string;
        phone: string;
    }>;
    logout(userId: number): Promise<void>;
    refreshTokens(userId: number, refreshToken: string): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        id: number;
        username: string;
        image: string;
    }>;
    hashData(data: string): Promise<string>;
    updateRefreshToken(userId: number, refreshToken: string): Promise<void>;
    getTokens(userId: number, email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
