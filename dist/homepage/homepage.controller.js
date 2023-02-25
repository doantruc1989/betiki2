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
const editHero_dto_1 = require("./dto/editHero.dto");
const homepage_service_1 = require("./homepage.service");
let HomepageController = class HomepageController {
    constructor(homepageService) {
        this.homepageService = homepageService;
    }
    async getHero() {
        return this.homepageService.listHero();
    }
    async getHeroById(id) {
        return this.homepageService.getHerobyId(id);
    }
    async patchHero(id, editHeroDto) {
        return this.homepageService.editHero(id, editHeroDto);
    }
    async getThuonghieuchinhhang() {
        return this.homepageService.listThuonghieuchinhhang();
    }
    async getChinhhangById(id) {
        return this.homepageService.getChinhhangbyId(id);
    }
    async patchChinhHang(id, editHeroDto) {
        return this.homepageService.editChinhhang(id, editHeroDto);
    }
    async getSaletet() {
        return this.homepageService.listSaletet();
    }
    async getBosuutap() {
        return this.homepageService.listBosuutap();
    }
    async getBosuutapById(id) {
        return this.homepageService.getBosuutapbyId(id);
    }
    async patchBosuutap(id, editHeroDto) {
        return this.homepageService.editBosuutap(id, editHeroDto);
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
    (0, common_1.Get)('hero/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getHeroById", null);
__decorate([
    (0, common_1.Patch)('hero/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, editHero_dto_1.default]),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "patchHero", null);
__decorate([
    (0, common_1.Get)('chinhhang'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getThuonghieuchinhhang", null);
__decorate([
    (0, common_1.Get)('chinhhang/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getChinhhangById", null);
__decorate([
    (0, common_1.Patch)('chinhhang/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, editHero_dto_1.default]),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "patchChinhHang", null);
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
    (0, common_1.Get)('bosuutap/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "getBosuutapById", null);
__decorate([
    (0, common_1.Patch)('bosuutap/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, editHero_dto_1.default]),
    __metadata("design:returntype", Promise)
], HomepageController.prototype, "patchBosuutap", null);
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