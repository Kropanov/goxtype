export type Challenge = {
    id: number;
    complexity: string;
    color: string;
};

export type Char = {
    char: string;
    colored: boolean;
};

export type TextFieldColor = 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined;

export type IconType = {
    element: JSX.Element;
    label: string;
};

export type Severity = 'error' | 'info' | 'success' | 'warning';

export type IconsType = IconType[];

export type NotificationType = {
    severity: Severity;
    message: string;
    open: boolean;
};

export type PackType = {
    name: string;
    author: string;
    date: string;
    image: string;
    description: string;
    data: Text[];
};

type Text = { text: string };

export type Role = 'user' | 'admin' | 'manager' | 'subscriber' | 'guest';
