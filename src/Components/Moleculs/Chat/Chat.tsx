import React, {MutableRefObject, useEffect, useRef, useState} from 'react';import {useTranslation} from "react-i18next";import {ActionCreator, AnyAction} from "@reduxjs/toolkit";import {v4 as uuidv4} from 'uuid';import cn from 'classnames';import {socket} from '../../../socket/socket';import {IDataSocket} from '../../../store/Slices/socketDataSlice/type';import Input from '../../Atoms/Input/Input';import Button from '../../Atoms/Button/Button';import classes from './chat.module.css';interface IChatProps {    data: IDataSocket[] | [],    messageSocket: ActionCreator<AnyAction>,    getMessageSocket: ActionCreator<AnyAction>}const Chat = ({data, messageSocket, getMessageSocket}: IChatProps) => {    const [isOpen, setIsOpen] = useState(false);    const [value, setValue] = useState('');        const lastItem = useRef() as MutableRefObject<HTMLDivElement>;    const {t} = useTranslation();    const handleOpen = () => {        setIsOpen(!isOpen);    };    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {        setValue(e.target.value);    };    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {        e.preventDefault();        value && messageSocket(value);        setValue('');        if (lastItem.current) {            lastItem.current.scrollIntoView({behavior: 'smooth', inline: 'end'});        }    };    useEffect(() => {        socket.on('message_get', (val) => {            getMessageSocket(val);        });    }, []);    return (        <div className={classes.container}>            <div onClick={handleOpen} className={classes.header}></div>            <div className={cn(classes.chat, {[classes.containerClose]: !isOpen}, {[classes.containerOpen]: isOpen})}>                <div className={classes.containerMessages}>                    {                        data[0] && data.map((item, index) => (                            <div key={uuidv4()}                                 className={cn(socket.id !== data[index].id ? classes.item : classes.float, classes.messages)}                                 tabIndex={0}                            >                                {item?.message}                            </div>                        ))                    }                    <div className={classes.lastElem} ref={lastItem}/>                </div>                <form onSubmit={handleClick}                      className={cn(classes.inputContainer, {[classes.containerInputClose]: !isOpen}, {[classes.containerInputOpen]: isOpen})}>                    <Input value={value} handleChange={handleChange} type={'text'} customStyle={classes.input}/>                    <Button customStyle={classes.button}                            text={t('send')}                            type={'submit'}                    />                </form>            </div>        </div>    );};export default Chat