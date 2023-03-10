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
exports.Giasochomnay = void 0;
const typeorm_1 = require("typeorm");
let Giasochomnay = class Giasochomnay {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", Number)
], Giasochomnay.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'category', length: 75, nullable: true }),
    __metadata("design:type", String)
], Giasochomnay.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Giasochomnay.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Giasochomnay.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { default: () => "'0'" }),
    __metadata("design:type", Number)
], Giasochomnay.prototype, "parentId", void 0);
Giasochomnay = __decorate([
    (0, typeorm_1.Entity)('giasochomnay')
], Giasochomnay);
exports.Giasochomnay = Giasochomnay;
//# sourceMappingURL=giasochomnay.js.map