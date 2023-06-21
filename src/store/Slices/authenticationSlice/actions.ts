import {IValueLogin, IValueRegistration} from "../../../utils/type";

export const actionsAuthentication = {
    GET_USER: 'GET_USER',
    SIGN_UP:'SIGN_UP',
    
    signUp: (data:IValueRegistration) => {
        return {
            type:actionsAuthentication.SIGN_UP,
            data
        }
    },
    
    getUserActions: (data:IValueLogin) => {
        return {
            type: actionsAuthentication.GET_USER,
            data
        }
    },
    
}
