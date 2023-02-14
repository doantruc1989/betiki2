import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from 'src/users/entity/user.entity';
import { Product } from 'src/product/entity/product.entity';
import { Hero } from 'src/homepage/entity/hero';
import { Giasochomnay } from 'src/homepage/entity/giasochomnay';
import { Bosuutap } from 'src/homepage/entity/bosuutap';
import { Thuonghieuchinhhang } from 'src/homepage/entity/thuonghieuchinhhang';
import { Thuonghieusaletet } from 'src/homepage/entity/thuonghieusaletet';
import { Dichvutienich } from 'src/homepage/entity/dichvutienich.entity';
import { Province } from 'src/homepage/entity/Province.entity';
import { Category } from 'src/product/entity/category';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: "localhost",
        port: 3306,
        username: "root",
        password: '',
        database: "db3",
        entities: [User, Product, Category, Province,  Hero, Bosuutap, Giasochomnay,Thuonghieuchinhhang,Thuonghieusaletet, Dichvutienich],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
