import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import baseURL from '../../url'

const getCities = createAsyncThunk('getCities', async ()=> {
 const res = await axios.get(`${baseURL}api/cities`)
 return res.data.data
})
const filterCities = createAsyncThunk('filterCities', async (data)=> {
    try{
        const res = await axios.get(`${baseURL}api/cities?${data.continents}&name=${data.search}`)
    let info = {
        response: res.data.data,
        search: data.search,
        checkBox: data.continents,
        check: data.continentsChecked
    }
    return info
}catch (error) {
    let info = {
      response: [],
      search: data.search,
      order: data.order,
    };
    return info;
  }
   })

   const createNewCity = createAsyncThunk('newCity', async(newCity) => {
    try{
        const res = await axios.post(`${baseURL}api/cities`, newCity)
    if(res.data.id){
        let info = {
            id: res.data.id,
            success: true,
            response: newCity
        }
        return info
    }else{
        let info = {
            success:false,
            messages: res.data.message
        }
        return info
    }
}catch(error){
    return {
        success: false,
        response: 'An error ocurred'
    }
}
})
const getCitiesAdmin = createAsyncThunk('getCitiesAdmin', async(id) => {
    try{
        const res = await axios.get(`${baseURL}api/cities?userId=${id}`)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})
const deleteCity = createAsyncThunk('deleteCity', async({id, token}) => {
    let headers = {headers:{ Authorization: `Bearer ${token}`}}
    try{
        const res = await axios.delete(`${baseURL}api/cities/${id}` , headers)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})

const updateCity = createAsyncThunk('updateCity', async({data, token}) => {
    let headers = {headers: {Authorization: `Bearer ${token}`}};
    try{
        const res = await axios.put(`${baseURL}api/cities/${data.id}`, data.citie, headers)
        return res.data.data
}catch(error){
    return {
        payload: "Error"
    }
}
})


const citiesActions = {
    getCities,
    filterCities,
    createNewCity,
    getCitiesAdmin,
    deleteCity,
    updateCity
}

export default citiesActions