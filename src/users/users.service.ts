import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entity/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.create(createUserDto);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async findById(id: number) {
    return this.usersRepository.findOneBy({id});
  }

  async findByEmail(email: string) {
    const user= await this.usersRepository.createQueryBuilder("user")
    .where({email:email})
    .getOne();
    return user;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ) {
    console.log(id, updateUserDto)
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
