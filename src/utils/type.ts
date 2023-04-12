export interface ILanguages {
    [key:string]:ILangItem,
    // [ru:string]:ILangItem,
    // en:ILangItem
}

interface ILangItem {
    nativeName:string
}