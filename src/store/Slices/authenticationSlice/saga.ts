import {takeEvery, call, all, fork} from "redux-saga/effects";
import {AnyAction} from "@reduxjs/toolkit";
import {postRequest} from "../../../api/api";
import {actionsAuthentication} from "./actions";

function* watcherGetUser() {
    yield takeEvery(actionsAuthentication.GET_USER, workerGetUser)
}

function* watcherSignUp() {
    yield takeEvery(actionsAuthentication.SIGN_UP, workerSignUp)
}

function* workerGetUser(data:AnyAction) {
    console.log('data--------->', data)
    try {
        let response:ResponseType = yield call(postRequest, {path:'/auth/login', data})
         console.log('response--------->', response)
    } catch (e) {
        console.log(new Error())
    }
}

function* workerSignUp(data:AnyAction) {
    console.log('data--------->', data)
    try {
        let response:ResponseType = yield call(postRequest, {path:'/auth/signUp', data})
        console.log('response--------->', response)
    } catch (e) {
        console.log(new Error())
    }
}


export default function* authenticationSaga() {
    yield all([
        fork(watcherGetUser),
        fork(watcherSignUp)
    ])
}
