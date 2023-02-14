import { HomepageService } from './homepage.service';
export declare class HomepageController {
    private homepageService;
    constructor(homepageService: HomepageService);
    getHero(): Promise<import("./entity/hero").Hero[]>;
    getThuonghieuchinhhang(): Promise<import("./entity/thuonghieuchinhhang").Thuonghieuchinhhang[]>;
    getGiasochomnay(): Promise<import("./entity/giasochomnay").Giasochomnay[]>;
    getSaletet(): Promise<import("./entity/thuonghieusaletet").Thuonghieusaletet[]>;
    getBosuutap(): Promise<import("./entity/bosuutap").Bosuutap[]>;
    getProvinces(): Promise<import("./entity/Province.entity").Province[]>;
    getProvincesName(name: string): Promise<import("./entity/Province.entity").Province>;
}
