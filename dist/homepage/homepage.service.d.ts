import { Repository } from 'typeorm';
import { Bosuutap } from './entity/bosuutap';
import { Giasochomnay } from './entity/giasochomnay';
import { Hero } from './entity/hero';
import { Province } from './entity/Province.entity';
import { Thuonghieuchinhhang } from './entity/thuonghieuchinhhang';
import { Thuonghieusaletet } from './entity/thuonghieusaletet';
export declare class HomepageService {
    private heroRepository;
    private thuonghieuchinhhangRepository;
    private giasochomnayRepository;
    private thuonghieusaletetRepository;
    private bosuutapRepository;
    private provinceRepository;
    constructor(heroRepository: Repository<Hero>, thuonghieuchinhhangRepository: Repository<Thuonghieuchinhhang>, giasochomnayRepository: Repository<Giasochomnay>, thuonghieusaletetRepository: Repository<Thuonghieusaletet>, bosuutapRepository: Repository<Bosuutap>, provinceRepository: Repository<Province>);
    listHero(): Promise<Hero[]>;
    listThuonghieuchinhhang(): Promise<Thuonghieuchinhhang[]>;
    listGiasochomnay(): Promise<Giasochomnay[]>;
    listSaletet(): Promise<Thuonghieusaletet[]>;
    listBosuutap(): Promise<Bosuutap[]>;
    listProvinces: () => Promise<Province[]>;
    listProvincesName: (name: string) => Promise<Province>;
}
