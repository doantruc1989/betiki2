"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("@hapi/joi");
const database_module_1 = require("./database/database.module");
const users_module_1 = require("./users/users.module");
const product_module_1 = require("./product/product.module");
const homepage_module_1 = require("./homepage/homepage.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    MYSQL_HOST: "localhost",
                    MYSQL_PORT: 3306,
                    MYSQL_USER: "root",
                    MYSQL_DB: "db3",
                    JWT_ACCESS_TOKEN_SECRET: "mycat",
                    JWT_ACCESS_TOKEN_EXPIRATION_TIME: "1d",
                    JWT_REFRESH_TOKEN_SECRET: "mycat2",
                    JWT_REFRESH_TOKEN_EXPIRATION_TIME: "7d",
                }),
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            product_module_1.ProductModule,
            homepage_module_1.HomepageModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map