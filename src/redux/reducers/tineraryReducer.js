import { createReducer } from "@reduxjs/toolkit";
import tinerariesActions from '../actions/tinerariesActions'

const {getTineraryUser, deleteTinerary, updateTinerary} = tinerariesActions;
const initialState = {
    tinerariesAdmin: [],
}
const tineraryReducer = createReducer(initialState,
    (builder)=> {
        builder
.addCase(getTineraryUser.fulfilled, (state, action)=>{
    return {...state, tinerariesAdmin: action.payload}
})
.addCase(deleteTinerary.fulfilled, (state, action)=>{
    let city = state.tinerariesAdmin.filter(city => city.id !== action.payload.data._id)
    return {...state, tinerariesAdmin: city}
})
.addCase(updateTinerary.fulfilled, (state, action)=>{
    return {...state}
})
})
export default tineraryReducer