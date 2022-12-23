export type Challenge = {
    id: number;
    complexity: string;
    color: string;
};

export type Char = {
    char: string;
    colored: boolean;
};

export type TextFieldColor = "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined;