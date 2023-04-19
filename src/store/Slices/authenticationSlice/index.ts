import {createSlice} from "@reduxjs/toolkit";
import {IAuthentication} from "./type";

const initialState:IAuthentication = {
    user:{}
}

const authenticationSlice = createSlice({
    name:'authenticationData',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
            return state
        }
    }
})

export const {getUser} = authenticationSlice.actions

export default authenticationSlice.reducer
