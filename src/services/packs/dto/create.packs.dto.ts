import {PacksDto} from "./packs.dto";

export interface CreatePacksDto {
    name: string;
    author: string;
    data: PacksDto[];
}
