import {connect} from "react-redux";
import {IInitialStateSocket} from "../../../store/Slices/socketDataSlice/type";
import {socketActions} from "../../../store/Slices/socketDataSlice/actions";
import Chat from "./Chat";

interface IProps {
    dataSocket: IInitialStateSocket;
}

const mapStateToProps = ({dataSocket}: IProps) => {
    return {
        data: dataSocket.dataSocket
    };
};

const mapDispatchToProps = () => {
    return {
        messageSocket: socketActions.socketDataAction,
        getMessageSocket: socketActions.getSocketDataAction
    };
};
export default connect(mapStateToProps, mapDispatchToProps())(Chat);
