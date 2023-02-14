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
exports.Dichvutienich = void 0;
const typeorm_1 = require("typeorm");
let Dichvutienich = class Dichvutienich {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", Number)
], Dichvutienich.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'category', length: 75, nullable: true }),
    __metadata("design:type", String)
], Dichvutienich.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Dichvutienich.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Dichvutienich.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { default: () => "'0'" }),
    __metadata("design:type", Number)
], Dichvutienich.prototype, "parentId", void 0);
Dichvutienich = __decorate([
    (0, typeorm_1.Entity)('dichvutienich')
], Dichvutienich);
exports.Dichvutienich = Dichvutienich;
//# sourceMappingURL=dichvutienich.entity.js.map