import classes from "./header.module.css";
import Modal from "../Modal/Modal";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import SelectLanguages from "../SelectLanguages/SelectLanguages";

const Header = () => {
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
    const {t} = useTranslation()
    const handleOpen = () => {
        setIsOpenModalLogin(true)
    }

    return (
        <>
            <header className={classes.container}>
                <span className={classes.logo}>Chat MPT</span>
                <div className={classes.containerBody}>
                    <div className={classes.containerButtons}>
                        <span onClick={handleOpen}>{t(`Login`)}</span>
                        <span>{t('Registration')}</span>
                    </div>
                    <SelectLanguages/>
                </div>
            </header>
            <Modal isOpen={isOpenModalLogin} setIsOpen={setIsOpenModalLogin}/>
        </>
    )
}

export default Header