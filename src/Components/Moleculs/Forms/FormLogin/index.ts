import {connect} from "react-redux";
import {actionsAuthentication} from "../../../../store/Slices/authenticationSlice/actions";
import {IAuthentication} from "../../../../store/Slices/authenticationSlice/type";
import FormLogin from "./FormLogin";

interface IPropsStateLogin {
    authenticationData:IAuthentication
}

const mapStateToProps = ({authenticationData}:IPropsStateLogin) => {
    const {user} = authenticationData
    return {
        user
    }
}

const mapDispatchToProps = () => {
    return {
        postLogin: actionsAuthentication.getUserActions
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(FormLogin)
