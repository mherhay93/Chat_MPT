import {useState} from "react";
import {useTranslation} from "react-i18next";
import Modal from "../Modal/index";
import SelectLanguages from "../SelectLanguages/index";
import FormLogin from "../Forms/FormLogin";
import FormRegistration from "../Forms/FormRegistration/index";
import classes from "./header.module.css";

const Header = () => {
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
    const [isOpenModalRegistration, setIsOpenModalRegistration] = useState(false)
    const {t} = useTranslation()
    const handleOpenLogin = () => {
        setIsOpenModalLogin(!isOpenModalLogin)
    }


    const handleOpenRegistration = () => {
        setIsOpenModalRegistration(!isOpenModalRegistration)
    }

    return (
        <>
            <header className={classes.container}>
                <span className={classes.logo}>Chat MPT</span>
                <div className={classes.containerBody}>
                    <div className={classes.containerButtons}>
                        <span onClick={handleOpenLogin}>{t(`Login`)}</span>
                        <span onClick={handleOpenRegistration}>{t('Registration')}</span>
                    </div>
                    <SelectLanguages/>
                </div>
            </header>
            <Modal
                children={
                    <FormLogin
                        handleCloseLoginModal={handleOpenLogin}
                        handleOpenRegistrationModal={handleOpenRegistration}
                    />}
                isOpen={isOpenModalLogin}
                setIsOpen={setIsOpenModalLogin}
            />
            <Modal
                children={<FormRegistration
                    handleCloseRegistrationModal={handleOpenRegistration}
                    handleOpenLoginModal={handleOpenLogin}
                />}
                isOpen={isOpenModalRegistration}
                setIsOpen={setIsOpenModalRegistration}/>
        </>
    )
}

export default Header
