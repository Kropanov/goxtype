export interface CreateUserDto {
    email: string;
    password: string;
    name?: string;
    role: Role;
}

export type Role = 'user' | 'admin';