import {Dispatch, ReactNode, SetStateAction} from "react";
import classes from "./modal.module.css";
import {IoIosCloseCircleOutline} from "react-icons/io"
import cn from "classnames";


interface IModal {
    children?: ReactNode | ReactNode[]
    isOpen:boolean,
    setIsOpen:Dispatch<SetStateAction<boolean>>
}

const Modal = ({children, isOpen, setIsOpen}: IModal) => {

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
        <div className={cn(classes.container, {[classes.openModal]:isOpen})}>
            <div className={classes.children}>
                <IoIosCloseCircleOutline
                    size={30}
                    className={classes.closeIcon}
                    onClick={handleClose}
                />
                {children}
            </div>

        </div>
    )
}

export default Modal