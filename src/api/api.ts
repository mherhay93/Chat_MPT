import axios from "axios";

interface IRequest {
    path:string
}

const postRequest = ({path}:IRequest) => {
    axios.post(`${process.env.REACT_APP_SOCKET_URL}${path}`, {

    })
}