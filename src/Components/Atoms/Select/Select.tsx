import React, {ReactNode, useState} from "react";
import cn from "classnames";
import {IoIosArrowDown} from "react-icons/io"

import {ILangItem} from "../../../utils/type";
import classes from "./select.module.css";

interface ISelect {
    data: ILangItem[],
    handleClick?: (e: any) => void,
    customSelectedValue?: string | ReactNode
}

const Select = ({data, customSelectedValue, handleClick = () => undefined}: ISelect) => {
    const [chooseData, setChooseData] = useState('en-US')
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
                            handleClick(item.value)
                            chooseLang(item.value)
                            handleOpen()
                        }}
                        key={item.nativeName}
                        className={classes.item}>
                        {item.nativeName}
                    </button>
                ))}

            </div>
        </div>
    )
}

export default Select