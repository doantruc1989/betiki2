import EditHeroDto from './dto/editHero.dto';
import { HomepageService } from './homepage.service';
export declare class HomepageController {
    private homepageService;
    constructor(homepageService: HomepageService);
    getHero(): Promise<import("./entity/hero").Hero[]>;
    getHeroById(id: number): Promise<import("./entity/hero").Hero>;
    patchHero(id: number, editHeroDto: EditHeroDto): Promise<import("./entity/hero").Hero>;
    getThuonghieuchinhhang(): Promise<import("./entity/thuonghieuchinhhang").Thuonghieuchinhhang[]>;
    getChinhhangById(id: number): Promise<import("./entity/thuonghieuchinhhang").Thuonghieuchinhhang>;
    b: any;
    patchChinhHang(id: number, editHeroDto: EditHeroDto): Promise<import("./entity/thuonghieuchinhhang").Thuonghieuchinhhang>;
    getSaletet(): Promise<import("./entity/thuonghieusaletet").Thuonghieusaletet[]>;
    getBosuutap(): Promise<import("./entity/bosuutap").Bosuutap[]>;
    getBosuutapById(id: number): Promise<import("./entity/bosuutap").Bosuutap>;
    patchBosuutap(id: number, editHeroDto: EditHeroDto): Promise<import("./entity/bosuutap").Bosuutap>;
    getProvinces(): Promise<import("./entity/Province.entity").Province[]>;
    getProvincesName(name: string): Promise<import("./entity/Province.entity").Province>;
}
