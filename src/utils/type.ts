export interface ILanguages {
    [key:string]:ILangItem,
    // [ru:string]:ILangItem,
    // en:ILangItem
}

interface ILangItem {
    nativeName:string
}

export interface IValueLogin {
    email:string,
    password:string
}

export interface IValueRegistration {
    name:string,
    surName:string,
    email:string,
    password:string,
    confirmPassword:string
}