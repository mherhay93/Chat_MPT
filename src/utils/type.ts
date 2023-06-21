export interface ILanguages {
    [key:string] : ILangItem,
}

export interface ILangItem {
    nativeName : string,
    value      : string
}

export interface IValueLogin {
    email    : string,
    password : string
}

export interface IValueRegistration {
    name            : string,
    surName         : string,
    email           : string,
    password        : string,
    confirmPassword : string
}