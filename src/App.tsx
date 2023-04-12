import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import {useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation()

    return (
        <div className="App">
            <Home/>
        </div>
    );
}

export default App;
