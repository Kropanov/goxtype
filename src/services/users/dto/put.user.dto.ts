import {Role} from "./create.user.dto";

export interface PutUserDto {
    email: string;
    password: string;
    name: string;
    role: Role;
}