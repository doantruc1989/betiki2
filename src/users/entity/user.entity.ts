import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { SharedProp } from './sharedProp.helper';

export enum Role {
  User = 'user',
  Admin = 'admin',
}

@Entity()
export class User extends SharedProp {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public address: string;

  @Column()
  public name: string;

  @Column()
  @Exclude()
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
}
