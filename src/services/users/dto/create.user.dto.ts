export interface CreateUserDto {
    email: string;
    password: string;
    name?: string;
    // colorMode: ColorMode;
    image?: string;
    role: Role;
}

export type Role = 'user' | 'admin';
export type ColorMode = 'light' | 'dark';