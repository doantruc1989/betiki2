import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SearchUsersDto } from './dto/searchUsers.dto';
import { updateUserPwDto } from './dto/updateUserPw.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entity/user.entity").User>;
    findAll(page: number): Promise<import("./entity/user.entity").User[]>;
    querySearch(searchUsersDto: SearchUsersDto): Promise<import("./entity/user.entity").User[]>;
    getcountUser(): Promise<number>;
    findById(id: number): Promise<import("./entity/user.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updatePw(id: number, updateUserPwDto: updateUserPwDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
