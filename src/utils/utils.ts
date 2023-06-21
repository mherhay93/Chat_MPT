import {ILanguages, IValueLogin, IValueRegistration} from "./type";

export const languages:ILanguages = {
    'en-US': {nativeName: 'EN', value : 'en-US'},
    ru     : {nativeName: 'RU', value : 'ru'},
    am     : {nativeName: 'AM', value : 'am'}
}

export const initialValueLogin:IValueLogin = { email: '', password: '' }
export const initialValueRegistration:IValueRegistration = {
    name:'',
    surName:'',
    email: '',
    password: '' ,
    confirmPassword:''
}