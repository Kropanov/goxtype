import {PacksDto} from "./packs.dto";

export interface CreatePacksDto {
    name: string;
    author: string;
    date: number;
    image: string;
    description: string;
    data: PacksDto[];
}
