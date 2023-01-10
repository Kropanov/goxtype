import {Challenge} from "../types/Types";

export const PAGES = ['practice', 'blog', 'contact', 'support'];
export const SETTINGS = ['Profile', 'Progress', 'Account', 'Logout'];
export const SITE_NAME = "GOXTYPE";

// for define user form ( AUTH - form of log in, Reg - form of sign up )
// ToDo: rework these variables
export const AUTH = 0;
export const REG = 1;

export const LOG_IN = "Log In";
export const SIGN_UP = "Sign Up";

export const CHALLENGES: Array<Challenge> = [
    {id: 1, complexity: 'Easy', color: "darkgreen"},
    {id: 2, complexity: 'Medium', color: "orange"},
    {id: 3, complexity: 'Hard', color: "red"},
];

export const MINUTE = 60;