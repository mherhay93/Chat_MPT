import {takeEvery, put, fork, all} from 'redux-saga/effects';import {AnyAction} from "@reduxjs/toolkit";import {socket} from '../../../socket/socket';import {socketActions} from './actions';import {dataSocket} from './index';function* watcherDataSocket() {    yield takeEvery(socketActions.SOCKET_DATA_ACTION, workerDataSocket);}export function* watcherGetSocketData() {    yield takeEvery(socketActions.GET_SOCKET_DATA_ACTION, getSocketDataAction);    }function* workerDataSocket(data: AnyAction) {    try {        yield  socket.emit('message', data.data);    } catch (e) {        console.log(new Error());    }}function* getSocketDataAction(data: AnyAction) {    try {        yield put(dataSocket(data.data));            } catch (e) {        console.log(new Error());    }}export default function* socketSaga() {    yield all([        fork(watcherDataSocket),        fork(watcherGetSocketData)    ]);}