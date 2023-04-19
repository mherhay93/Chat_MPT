import {Dispatch, ReactNode, SetStateAction} from "react";
import {IoIosCloseCircleOutline} from "react-icons/io"
import cn from "classnames";
import classes from "./modal.module.css";


interface IModal {
    children?: ReactNode | ReactNode[]
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({children, isOpen, setIsOpen}: IModal) => {

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <div className={cn(classes.container, {[classes.openModal]: isOpen})}></div>
            <div className={cn(classes.children, {[classes.openChildren]: isOpen})}>
                <IoIosCloseCircleOutline
                    className={classes.closeIcon}
                    onClick={handleClose}
                />
                {children}
            </div>
        </div>
    )
}

export default Modal
