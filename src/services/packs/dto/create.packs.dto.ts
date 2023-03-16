import {Text} from "./packs.dto";

export interface CreatePackDto {
    name: string;
    author: string;
    date: number;
    image: string;
    description: string;
    data: Text[];
}
