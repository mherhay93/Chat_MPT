import {ILanguages, IValueLogin, IValueRegistration} from "./type";

export const languages:ILanguages = {
    en: {nativeName: 'EN'},
    ru: {nativeName: 'РУ'},
    am: {nativeName: 'ՀԱՅ'}
}

export const initialValueLogin:IValueLogin = { email: '', password: '' }
export const initialValueRegistration:IValueRegistration = {
    name:'',
    surName:'',
    email: '',
    password: '' ,
    confirmPassword:''
}
