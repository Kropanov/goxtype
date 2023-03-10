import {Challenge} from "../components/Types/Types";

export const PAGES = [
    {name: "practice", uri: "practice-packs"},
    {name: "blog", uri: "blog"},
    {name: "contact", uri: "contact"},
    {name: "support", uri: "support"},
];
export const SETTINGS = ['Profile', 'Progress', 'Account', 'Logout'];
export const SITE_NAME = "GOXTYPE";

export enum FORM_TABS {
    AUTH,
    REG
}

export const LOG_IN = "Log In";
export const SIGN_UP = "Sign Up";

export const CHALLENGES: Array<Challenge> = [
    {id: 1, complexity: 'Easy', color: "darkgreen"},
    {id: 2, complexity: 'Medium', color: "orange"},
    {id: 3, complexity: 'Hard', color: "red"},
];

export const MINUTE = 60;
export const MIDDLE_QUANTITY_CHAR = 5;

export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";
