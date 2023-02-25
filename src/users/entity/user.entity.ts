import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { SharedProp } from './sharedProp.helper';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export enum Role {
  User = 'user',
  Admin = 'admin',
}

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  public id: number;

  @IsNotEmpty()
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Column()
  public address: string;

  @Column()
  public username: string;

  @Column()
  public phone:string;

  @Column()
  @Length(8,24)
  // @Exclude()
  public password: string;

  @Column({
    default:
      'https://nhungdieuthuvi.com/wp-content/uploads/2021/08/avartar-vit-vang-psyduck.jpg',
  })
  image: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  role: Role[];

  @Column({
    nullable: true,
  })
  
  @Exclude()
  public refreshToken?: string;

  @Column({
		default: () => 'CURRENT_TIMESTAMP',
		type: 'datetime',
		name: 'createdAt',
	  })
	  createdAt: Date;
}
