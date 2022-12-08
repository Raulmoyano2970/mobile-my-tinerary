import { createReducer } from "@reduxjs/toolkit";
import showsActions from '../actions/showActions'

const {getShowUser, deleteShow, updateShow} = showsActions;
const initialState = {
    showsUser: [],
}
const showReducer = createReducer(initialState,
    (builder)=> {
        builder
.addCase(getShowUser.fulfilled, (state, action)=>{
    return {...state, showsUser: action.payload}
})
.addCase(deleteShow.fulfilled, (state, action)=>{
    let show = state.showsUser.filter(show => show.id !== action.payload.data._id)
    return {...state, showsUser: show}
})
.addCase(updateShow.fulfilled, (state, action)=>{
    return {...state}
})
})
export default showReducer