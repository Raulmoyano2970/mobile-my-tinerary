import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import baseURL from '../../url'

const getShowUser = createAsyncThunk('getShowUser', async(id) => {
    try{
        const res = await axios.get(`${baseURL}api/shows?userId=${id}`)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const deleteShow = createAsyncThunk('deleteShow', async({id, token}) => {
    let headers = {headers:{Authorization: `Bearer ${token}`}}
    try{
        const res = await axios.delete(`${baseURL}api/shows/${id}`, headers)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const updateShow = createAsyncThunk('updateShow', async({data, token}) => {
    let headers = {headers:{Authorization: `Bearer ${token}`}}
    try{
        const res = await axios.patch(`${baseURL}api/shows/${data.id}`, headers)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const showsActions = {

    getShowUser,
    deleteShow,
    updateShow
}

export default showsActions