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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomepageController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const homepage_service_1 = require("./homepage.service");
let HomepageController = class HomepageController {
    constructor(homepageService) {
        this.homepageService = homepageService;
    }
    async getHero() {
        return this.homepageService.listHero();
    }
    async getThuonghieuchinhhang() {
        return this.homepageService.listThuonghieuchinhhang();
    }
    async getGiasochomnay() {
        return this.homepageService.listGiasochomnay();
    }
    async getSaletet() {
        return this.homepageService.listSaletet();
    }
    async getBosuutap() {
        return this.homepageService.listBosuutap();
    }
    async getProvinces() {
        return this.homepageService.listProvinces();
    }
    async getProvincesName(name) {
        return this.homepageService.listProvincesName(name);
    }
};
__decorate([
    (0, common_1.Get)('hero'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getHero", null);
__decorate([
    (0, common_1.Get)('chinhhang'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getThuonghieuchinhhang", null);
__decorate([
    (0, common_1.Get)('giasochomnay'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getGiasochomnay", null);
__decorate([
    (0, common_1.Get)('saletet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getSaletet", null);
__decorate([
    (0, common_1.Get)('bosuutap'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getBosuutap", null);
__decorate([
    (0, common_1.Get)('provinces'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getProvinces", null);
__decorate([
    (0, common_1.Get)('provinces/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getProvincesName", null);
HomepageController = __decorate([
    (0, common_1.Controller)('homepage'),
    (0, swagger_1.ApiTags)('homepage'),
    __metadata("design:paramtypes", [homepage_service_1.HomepageService])
], HomepageController);
exports.HomepageController = HomepageController;
//# sourceMappingURL=homepage.controller.js.map