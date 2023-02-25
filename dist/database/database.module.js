"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../users/entity/user.entity");
const product_entity_1 = require("../product/entity/product.entity");
const hero_1 = require("../homepage/entity/hero");
const bosuutap_1 = require("../homepage/entity/bosuutap");
const thuonghieuchinhhang_1 = require("../homepage/entity/thuonghieuchinhhang");
const thuonghieusaletet_1 = require("../homepage/entity/thuonghieusaletet");
const Province_entity_1 = require("../homepage/entity/Province.entity");
const category_1 = require("../product/entity/category");
const OrderItem_1 = require("../cart/entity/OrderItem");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: "localhost",
                    port: 3306,
                    username: "root",
                    password: '',
                    database: "db3",
                    entities: [user_entity_1.User, OrderItem_1.OrderItem, product_entity_1.Product, category_1.Category, Province_entity_1.Province, hero_1.Hero, bosuutap_1.Bosuutap, thuonghieuchinhhang_1.Thuonghieuchinhhang, thuonghieusaletet_1.Thuonghieusaletet],
                    synchronize: true,
                }),
            }),
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map