"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signUp(createUserDto) {
        const userExists = await this.usersService.findByEmail(createUserDto.email);
        if (userExists) {
            throw new common_1.BadRequestException('User already exists');
        }
        const hash = await this.hashData(createUserDto.password);
        const newUser = await this.usersService.create(Object.assign(Object.assign({}, createUserDto), { password: hash }));
        const tokens = await this.getTokens(newUser.id, newUser.email);
        await this.updateRefreshToken(newUser.id, tokens.refreshToken);
        return tokens;
    }
    async signIn(data) {
        const user = await this.usersService.findByEmail(data.email);
        console.log('user ', user);
        if (!user) {
            throw new common_1.BadRequestException('User does not exist');
        }
        const passwordMatches = await bcrypt.compare(data.password, user.password);
        if (!passwordMatches) {
            throw new common_1.BadRequestException('Password is incorrect');
        }
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return {
            tokens,
            roles: user.role,
            id: user.id,
            username: user.name,
            image: user.image,
        };
    }
    async logout(userId) {
        this.usersService.update(userId, { refreshToken: null });
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.usersService.findById(userId);
        if (!user || !user.refreshToken)
            throw new common_1.ForbiddenException('Access Denied');
        const refreshTokenMatches = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!refreshTokenMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return { tokens, id: user.id, username: user.name, image: user.image };
    }
    async hashData(data) {
        return await bcrypt.hash(data, 10);
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.usersService.update(userId, {
            refreshToken: hashedRefreshToken,
        });
    }
    async getTokens(userId, email) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.sign({
                sub: userId,
                email,
            }, {
                secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET') || "mycat",
                expiresIn: '120m',
            }),
            this.jwtService.sign({
                sub: userId,
                email,
            }, {
                secret: this.configService.get('JWT_REFRESH_TOKEN_SECRET') || "mycat2",
                expiresIn: '7d',
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map