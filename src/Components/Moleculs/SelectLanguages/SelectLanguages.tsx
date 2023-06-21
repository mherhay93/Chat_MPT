import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {languages} from "../../../utils/utils";
import Select from "../../Atoms/Select/Select";
import classes from "../../Atoms/Select/select.module.css";

const SelectLanguages = () => {
    const {i18n} = useTranslation()
    const [selectedLanguages, setSelectedLanguages] = useState(localStorage.getItem('i18nextLng') || 'en-US')

    const chooseLang = (lng: string) => {
        i18n.changeLanguage(lng).then(r => r)
        setSelectedLanguages(lng)
    }
    return (
        <div className={classes.container}>
            <Select handleClick={chooseLang}
                    customSelectedValue={languages[selectedLanguages].nativeName}
                    data={Object.values(languages)}
            />
        </div>
    )
}

export default SelectLanguages
