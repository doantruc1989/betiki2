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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entity/user.entity");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        const newUser = await this.usersRepository.create(createUserDto);
        await this.usersRepository.save(newUser);
        return newUser;
    }
    async findAll(page = 1) {
        return this.usersRepository.find({
            skip: 5 * (page - 1),
            take: 5,
        });
    }
    async getCountUser() {
        const countUser = this.usersRepository.count();
        return countUser;
    }
    async findById(id) {
        return this.usersRepository.findOneBy({ id: id });
    }
    async findByEmail(email) {
        const user = await this.usersRepository.findOneBy({ email: email });
        return user;
    }
    async updateuser(id, updateUserDto) {
        return this.usersRepository.update(id, updateUserDto);
    }
    async updatePW(id, updateUserPwDto) {
        const user = await this.usersRepository.findOneBy({ id });
        const hashPw = await bcrypt.hash(updateUserPwDto.password, 10);
        user.password = hashPw;
        return this.usersRepository.update(id, user);
    }
    async remove(id) {
        return this.usersRepository.delete(id);
    }
    async querySearchUsers(searchUsersDto) {
        const users = await this.usersRepository.createQueryBuilder("User");
        if (searchUsersDto.search === "adminasc") {
            return users
                .orderBy(`User.${searchUsersDto.sortBy}`, 'ASC')
                .getMany();
        }
        if (searchUsersDto.search === "admindesc") {
            return users
                .orderBy(`User.${searchUsersDto.sortBy}`, 'DESC')
                .getMany();
        }
        if (searchUsersDto.search === "searchall") {
            return users
                .where(`LOWER(email) LIKE '%${searchUsersDto.sortBy}%'`)
                .orWhere(`LOWER(username) LIKE '%${searchUsersDto.sortBy}%'`)
                .orWhere(`LOWER(role) LIKE '%${searchUsersDto.sortBy}%'`)
                .getMany();
        }
        return users.getMany();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map