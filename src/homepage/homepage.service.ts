import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bosuutap } from './entity/bosuutap';
import { Giasochomnay } from './entity/giasochomnay';
import { Hero } from './entity/hero';
import { Province } from './entity/Province.entity';
import { Thuonghieuchinhhang } from './entity/thuonghieuchinhhang';
import { Thuonghieusaletet } from './entity/thuonghieusaletet';

@Injectable()
export class HomepageService {
    constructor(
        @InjectRepository(Hero)
        private heroRepository: Repository<Hero>,

        @InjectRepository(Thuonghieuchinhhang)
        private thuonghieuchinhhangRepository: Repository<Thuonghieuchinhhang>,

        @InjectRepository(Giasochomnay)
        private giasochomnayRepository: Repository<Giasochomnay>,

        @InjectRepository(Thuonghieusaletet)
        private thuonghieusaletetRepository: Repository<Thuonghieusaletet>,

        @InjectRepository(Bosuutap)
        private bosuutapRepository: Repository<Bosuutap>,
        
        @InjectRepository(Province)
        private provinceRepository: Repository<Province>,
    ) { }

    async listHero() {
        return await this.heroRepository.find()
    }

    async listThuonghieuchinhhang() {
        return await this.thuonghieuchinhhangRepository.find()
    }

    async listGiasochomnay() {
        return await this.giasochomnayRepository.find()
    }

    async listSaletet() {
        return await this.thuonghieusaletetRepository.find()
    }

    async listBosuutap() {
        return await this.bosuutapRepository.find()
    }

    listProvinces = async () => {
        const provinces = await this.provinceRepository.find();
        return provinces;
    }

    listProvincesName = async (name: string) => {
        const provinces = await this.provinceRepository.findOneBy({ name })
        return provinces;
    }
}
