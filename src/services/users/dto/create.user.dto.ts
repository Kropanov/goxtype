export interface CreateUserDto {
    email: string;
    password: string;
    name?: string;
    permissionLevel?: number;
}