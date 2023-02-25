import { Repository } from 'typeorm';
import EditHeroDto from './dto/editHero.dto';
import { Bosuutap } from './entity/bosuutap';
import { Hero } from './entity/hero';
import { Province } from './entity/Province.entity';
import { Thuonghieuchinhhang } from './entity/thuonghieuchinhhang';
import { Thuonghieusaletet } from './entity/thuonghieusaletet';
export declare class HomepageService {
    private heroRepository;
    private thuonghieuchinhhangRepository;
    private thuonghieusaletetRepository;
    private bosuutapRepository;
    private provinceRepository;
    constructor(heroRepository: Repository<Hero>, thuonghieuchinhhangRepository: Repository<Thuonghieuchinhhang>, thuonghieusaletetRepository: Repository<Thuonghieusaletet>, bosuutapRepository: Repository<Bosuutap>, provinceRepository: Repository<Province>);
    listHero(): Promise<Hero[]>;
    getHerobyId(id: number): Promise<Hero>;
    editHero(id: number, editHeroDto: EditHeroDto): Promise<Hero>;
    listThuonghieuchinhhang(): Promise<Thuonghieuchinhhang[]>;
    getChinhhangbyId(id: number): Promise<Thuonghieuchinhhang>;
    editChinhhang(id: number, editHeroDto: EditHeroDto): Promise<Thuonghieuchinhhang>;
    listSaletet(): Promise<Thuonghieusaletet[]>;
    listBosuutap(): Promise<Bosuutap[]>;
    getBosuutapbyId(id: number): Promise<Bosuutap>;
    editBosuutap(id: number, editHeroDto: EditHeroDto): Promise<Bosuutap>;
    listProvinces: () => Promise<Province[]>;
    listProvincesName: (name: string) => Promise<Province>;
}
