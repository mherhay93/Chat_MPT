import React, {ReactNode, useState} from "react";
import {IoIosArrowDown} from "react-icons/io"
import cn from "classnames";
import classes from "./select.module.css";

interface ISelect {
    data: string[],
    handleClick?: (e: string) => void,
    customSelectedValue?: string | ReactNode
}

const Select = ({data, customSelectedValue, handleClick = () => undefined}: ISelect) => {
    const [chooseData, setChooseData] = useState('EN')
    const [isOpen, setIsOpen] = useState(false)

    const chooseLang = (val: string) => {
        setChooseData(val)
    }

    const handleOpen = () => {
      setIsOpen(!isOpen)
    }

    return (
        <div className={classes.container}>
            <div onClick={handleOpen} className={classes.containerHeader}>
                <div className={classes.header}>{!customSelectedValue ? chooseData : customSelectedValue}</div>
                <IoIosArrowDown className={cn(classes.icon, {[classes.iconSelected]:isOpen})}/>
            </div>
            <div className={cn(classes.body, {[classes.bodyVisibly]:isOpen})}>
                {data.map(item => (
                    <button
                        onClick={() => {
                            handleClick(item)
                            chooseLang(item)
                            handleOpen()
                        }}
                        key={item}
                        className={classes.item}>
                        {item}
                    </button>
                ))}

            </div>
        </div>
    )
}

export default Select
