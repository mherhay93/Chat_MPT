import {ILanguages, IValueLogin, IValueRegistration} from "./type";

export const languages:ILanguages = {
    en: {nativeName: 'EN'},
    ru: {nativeName: 'RU'},
    am: {nativeName: 'AM'}
}

export const initialValueLogin:IValueLogin = { email: '', password: '' }
export const initialValueRegistration:IValueRegistration = {
    name:'',
    surName:'',
    email: '',
    password: '' ,
    confirmPassword:''
}