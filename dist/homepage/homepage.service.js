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
exports.HomepageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bosuutap_1 = require("./entity/bosuutap");
const hero_1 = require("./entity/hero");
const Province_entity_1 = require("./entity/Province.entity");
const thuonghieuchinhhang_1 = require("./entity/thuonghieuchinhhang");
const thuonghieusaletet_1 = require("./entity/thuonghieusaletet");
let HomepageService = class HomepageService {
    constructor(heroRepository, thuonghieuchinhhangRepository, thuonghieusaletetRepository, bosuutapRepository, provinceRepository) {
        this.heroRepository = heroRepository;
        this.thuonghieuchinhhangRepository = thuonghieuchinhhangRepository;
        this.thuonghieusaletetRepository = thuonghieusaletetRepository;
        this.bosuutapRepository = bosuutapRepository;
        this.provinceRepository = provinceRepository;
        this.listProvinces = async () => {
            const provinces = await this.provinceRepository.find();
            return provinces;
        };
        this.listProvincesName = async (name) => {
            const provinces = await this.provinceRepository.findOneBy({ name });
            return provinces;
        };
    }
    async listHero() {
        return await this.heroRepository.find();
    }
    async getHerobyId(id) {
        const hero = await this.heroRepository.findOneBy({ id });
        return hero;
    }
    async editHero(id, editHeroDto) {
        const hero = await this.heroRepository.findOneBy({ id });
        hero.name = editHeroDto.name;
        hero.image = editHeroDto.image;
        hero.path = editHeroDto.path;
        const updatedHero = this.heroRepository.save(hero);
        return updatedHero;
    }
    async listThuonghieuchinhhang() {
        return await this.thuonghieuchinhhangRepository.find();
    }
    async getChinhhangbyId(id) {
        const chinhhang = await this.thuonghieuchinhhangRepository.findOneBy({ id });
        return chinhhang;
    }
    async editChinhhang(id, editHeroDto) {
        const chinhhang = await this.thuonghieuchinhhangRepository.findOneBy({ id });
        chinhhang.name = editHeroDto.name;
        chinhhang.image = editHeroDto.image;
        chinhhang.path = editHeroDto.path;
        const updatedChinhhang = this.thuonghieuchinhhangRepository.save(chinhhang);
        return updatedChinhhang;
    }
    async listSaletet() {
        return await this.thuonghieusaletetRepository.find();
    }
    async listBosuutap() {
        return await this.bosuutapRepository.find();
    }
    async getBosuutapbyId(id) {
        const bosuutap = await this.bosuutapRepository.findOneBy({ id });
        return bosuutap;
    }
    async editBosuutap(id, editHeroDto) {
        const bosuutap = await this.bosuutapRepository.findOneBy({ id });
        bosuutap.name = editHeroDto.name;
        bosuutap.image = editHeroDto.image;
        bosuutap.path = editHeroDto.path;
        const UpdatedBosuutap = this.bosuutapRepository.save(bosuutap);
        return UpdatedBosuutap;
    }
};
HomepageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hero_1.Hero)),
    __param(1, (0, typeorm_1.InjectRepository)(thuonghieuchinhhang_1.Thuonghieuchinhhang)),
    __param(2, (0, typeorm_1.InjectRepository)(thuonghieusaletet_1.Thuonghieusaletet)),
    __param(3, (0, typeorm_1.InjectRepository)(bosuutap_1.Bosuutap)),
    __param(4, (0, typeorm_1.InjectRepository)(Province_entity_1.Province)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], HomepageService);
exports.HomepageService = HomepageService;
//# sourceMappingURL=homepage.service.js.map