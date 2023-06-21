import {Formik, FormikErrors} from "formik";
import {useTranslation} from "react-i18next";
import {initialValueRegistration} from "../../../../utils/utils";
import {IValueRegistration} from "../../../../utils/type";
import Input from "../../../Atoms/Input/Input";
import Button from "../../../Atoms/Button/Button";
import classes from "../formLogin.module.css";

interface IRegistrationForm {
    handleCloseRegistrationModal: () => void
    handleOpenLoginModal: () => void
    postRegistrationData:(p:IValueRegistration) => void
}

const FormRegistration = ({handleCloseRegistrationModal, handleOpenLoginModal, postRegistrationData}: IRegistrationForm) => {
    const {t} = useTranslation()
    const handleClick = async () => {
       await handleCloseRegistrationModal()
       await handleOpenLoginModal()
    }

    return (
        <div>
            <Formik
                initialValues={initialValueRegistration}
                validate={values => {
                    const errors: FormikErrors<IValueRegistration> = {};
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
                    if (!values.name) {
                        errors.name = 'Required'
                    }
                    if (!values.surName) {
                        errors.surName = 'Required'
                    }
                    if (!values.confirmPassword) {
                        errors.confirmPassword = 'Required'
                    } else if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = 'Those passwords didn’t match'
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    postRegistrationData(values)
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
                        <h1 className={classes.title}>{t('Registration')}</h1>
                        <label className={classes.label}>
                            <span className={classes.labelText}>{t('Name')}</span>
                            <Input
                                value={values.name}
                                type={'text'}
                                name={'name'}
                                onBlur={handleBlur}
                                handleChange={handleChange}
                                customStyle={classes.input}
                            />
                            {errors.name && touched.name && <span className={classes.error}>{errors.name}</span>}
                        </label>
                        <label className={classes.label}>
                            <span className={classes.labelText}>{t('surName')}</span>
                            <Input
                                value={values.surName}
                                type={'text'}
                                name={'surName'}
                                onBlur={handleBlur}
                                handleChange={handleChange}
                                customStyle={classes.input}
                            />
                            {errors.surName && touched.surName &&
                                <span className={classes.error}>{errors.surName}</span>}
                        </label>
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
                        <label className={classes.label}>
                            <span className={classes.labelText}>{t('confirmPassword')}</span>
                            <Input
                                value={values.confirmPassword}
                                type={'password'}
                                name={'confirmPassword'}
                                onBlur={handleBlur}
                                handleChange={handleChange}
                                customStyle={classes.input}
                            />
                            {errors.confirmPassword && touched.confirmPassword &&
                                <span className={classes.error}>{errors.confirmPassword}</span>}
                        </label>
                        <Button disabled={isSubmitting} customStyle={classes.button} type={'submit'}
                                text={t('Registration')}/>
                    </form>
                )}
            </Formik>
            <div className={classes.help}>
                <span>{t('registrationQuestion')}</span>
                <span onClick={handleClick}>{t('Login')}</span>
            </div>
        </div>
    )
}

export default FormRegistration
