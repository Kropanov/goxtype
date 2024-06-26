import { Challenge } from '../components/Types/Types';

export const PAGES = [
    { name: 'practice', urn: 'practice-packs' },
    { name: 'blog', urn: 'blog' },
    { name: 'contact', urn: 'contact' },
    { name: 'support', urn: 'support' },
];
export const SETTINGS = ['Profile', 'Progress', 'Account', 'Logout'];
export const SITE_NAME = 'GOXTYPE';

export enum FORM_TABS {
    AUTH,
    REG,
}

export const LOG_IN = 'Log In';
export const SIGN_UP = 'Sign Up';

export const CHALLENGES: Array<Challenge> = [
    { id: 1, complexity: 'Easy', color: 'darkgreen' },
    { id: 2, complexity: 'Medium', color: 'orange' },
    { id: 3, complexity: 'Hard', color: 'red' },
];

export const MINUTE = 60;
export const MIDDLE_QUANTITY_CHAR = 5;

export enum NOTIFICATION {
    HIDE,
    ERROR,
    EMPTY_FIELDS,
    SUCCESS_REGISTRATION,
    SUCCESS_AUTHORIZATION,
    INVALID_EMAIL_PASSWORD,
    FAIL_VALIDATION_PASSWORD,
    EMAIL_ALREADY_EXIST,
    SUCCESS_UPDATE_PASSWORD,
    SUCCESS_UPDATE_USERNAME,
}

export enum API_ROUTES {
    LOGIN = 'login',
    SIGN_UP = 'signup',
    REFRESH_TOKEN = 'refresh',
    USERS = 'users/',
    PRACTICE_PACKS = 'practice-packs',
    PROFILE = 'profile',
}

export enum KEY {
    TOKEN = 'token',
    IMAGE = 'image',
    NAME = 'name',
    THEME = 'theme',
}
