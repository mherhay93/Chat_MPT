import { ReactNode } from 'react';
import classes from './layout.module.css';
import Chat from '../Chat/Chat';

interface ILayout {
  children: ReactNode | ReactNode[]
}
const Layout = ({children}:ILayout) => {
  return (
      <div className={classes.container}>
        {children}
        <Chat/>
      </div>
  )
}

export default Layout