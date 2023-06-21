import axios from "axios";
import {AnyAction} from "@reduxjs/toolkit";

interface IRequest {
    path:string,
    data:AnyAction
}

export const postRequest = ({path, data}:IRequest) => {
    console.log('data----request----->', data);
  return axios.post(`${process.env.REACT_APP_SOCKET_URL}${path}`, data.data, {
        // params,
        // headers,
    })
}
