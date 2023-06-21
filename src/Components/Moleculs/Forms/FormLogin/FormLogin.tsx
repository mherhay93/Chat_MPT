import {Formik, FormikErrors} from "formik";
import {useTranslation} from "react-i18next";
import {initialValueLogin} from "../../../../utils/utils";
import {IValueLogin} from "../../../../utils/type";
import Input from "../../../Atoms/Input/Input";
import Button from "../../../Atoms/Button/Button";
import classes from "../formLogin.module.css";

interface ILoginForm {
    handleCloseLoginModal: () => void
    handleOpenRegistrationModal: () => void
    postLogin:(p:IValueLogin) => void
}

const FormLogin = ({handleCloseLoginModal, handleOpenRegistrationModal, postLogin}: ILoginForm) => {
    const {t} = useTranslation()
    const handleClick = async () => {
        await handleCloseLoginModal()
        await handleOpenRegistrationModal()
    }
    
    return (
        <div>
            <Formik
                initialValues={initialValueLogin}
                validate={values => {
                    const errors: FormikErrors<IValueLogin> = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    postLogin(values)
                    setSubmitting(false)
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form className={classes.container} onSubmit={handleSubmit}>
                        <h1 className={classes.title}>{t('Login')}</h1>
                        <label className={classes.label}>
                            <span className={classes.labelText}>{t('Email')}</span>
                            <Input
                                value={values.email}
                                type={'text'}
                                name={'email'}
                                onBlur={handleBlur}
                                handleChange={handleChange}
                                customStyle={classes.input}
                            />
                            {errors.email && touched.email && <span className={classes.error}>{errors.email}</span>}
                        </label>
                        <label className={classes.label}>
                            <span className={classes.labelText}>{t('Password')}</span>
                            <Input
                                value={values.password}
                                type={'password'}
                                name={'password'}
                                onBlur={handleBlur}
                                handleChange={handleChange}
                                customStyle={classes.input}
                            />
                            {errors.password && touched.password &&
                                <span className={classes.error}>{errors.password}</span>}
                        </label>
                        
                        <Button disabled={isSubmitting} customStyle={classes.button} type={'submit'} text={t('Login')}/>
                    </form>
                )}
            </Formik>
            <div className={classes.help}>
                <span>{t('loginQuestion')}</span>
                <span onClick={handleClick}>{t('Registration')}</span>
            </div>
        </div>
    )
}

export default FormLogin
