import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import baseURL from '../../url'

const getTineraryUser = createAsyncThunk('getTineraryUser', async(id) => {
    try{
        const res = await axios.get(`${baseURL}api/itineraries?userId=${id}`)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const deleteTinerary = createAsyncThunk('deleteTinerary', async({id, token}) => {
    let headers = {headers:{Authorization: `Bearer ${token}`}}
    try{
        const res = await axios.delete(`${baseURL}api/itineraries/${id}`, headers)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const updateTinerary = createAsyncThunk('updateTinerary', async({data, token}) => {
let headers = {headers: {Authorization: `Bearer ${token}`}} 
    try{
        const res = await axios.put(`${baseURL}api/itineraries/${data.id}`, data.tineraries, headers)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const tinerariesActions = {

    getTineraryUser,
    deleteTinerary,
    updateTinerary
}

export default tinerariesActions