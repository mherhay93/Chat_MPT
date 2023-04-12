import {ReactNode, useState} from 'react';
import classes from './layout.module.css';
import Chat from '../Chat/Chat';
import Header from "../Header/Header";

interface ILayout {
    children: ReactNode | ReactNode[]
}

const Layout = ({children}: ILayout) => {


    return (
        <>
            <Header/>
            <div className={classes.container}>
                {children}
                <Chat/>
            </div>
        </>
    )
}

export default Layout