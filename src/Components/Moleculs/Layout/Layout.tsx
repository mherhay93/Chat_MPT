import {ReactNode} from 'react';
import Chat from '../Chat/index';
import Header from "../Header/index";
import classes from './layout.module.css';

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
