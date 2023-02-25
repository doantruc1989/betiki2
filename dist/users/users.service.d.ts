import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUsersDto } from './dto/searchUsers.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { updateUserPwDto } from './dto/updateUserPw.dto';
import { User } from './entity/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(page?: number): Promise<User[]>;
    getCountUser(): Promise<number>;
    findById(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    updateuser(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updatePW(id: number, updateUserPwDto: updateUserPwDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    querySearchUsers(searchUsersDto: SearchUsersDto): Promise<User[]>;
}
