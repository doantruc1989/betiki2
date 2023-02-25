"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepageModule = void 0;
const common_1 = require("@nestjs/common");
const homepage_service_1 = require("./homepage.service");
const homepage_controller_1 = require("./homepage.controller");
const typeorm_1 = require("@nestjs/typeorm");
const hero_1 = require("./entity/hero");
const bosuutap_1 = require("./entity/bosuutap");
const thuonghieuchinhhang_1 = require("./entity/thuonghieuchinhhang");
const thuonghieusaletet_1 = require("./entity/thuonghieusaletet");
const Province_entity_1 = require("./entity/Province.entity");
let HomepageModule = class HomepageModule {
};
HomepageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hero_1.Hero, bosuutap_1.Bosuutap, thuonghieuchinhhang_1.Thuonghieuchinhhang, thuonghieusaletet_1.Thuonghieusaletet, Province_entity_1.Province])],
        providers: [homepage_service_1.HomepageService],
        controllers: [homepage_controller_1.HomepageController]
    })
], HomepageModule);
exports.HomepageModule = HomepageModule;
//# sourceMappingURL=homepage.module.js.map