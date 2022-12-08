import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../url";

const getReaction = createAsyncThunk("getReaction", async (id) => {

    try{
    const response = await axios.get(`${baseURL}api/reactions?itineraryId=${id}`);
    return {
        success: true,
        response: response.data,
        itineraryId: response.data.id
    };
    } catch(error){
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});

const getUserReactions = createAsyncThunk("getUserReactions", async (id, token) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try{
    const response = await axios.get(`${baseURL}api/reactions?userId=${id}`, headers);
    return {
        success: true,
        response: response.data.data,
    };
    } catch(error){
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});

const updateReaction = createAsyncThunk("updateReaction", async ( datos ) => {
    let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
    try {
        const response = await axios.put(`${baseURL}api/reactions?name=${datos.name}&itineraryId=${datos.id}`,null, headers);
        return response.data.response;
    }
    catch (error) {
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }

});

const deleteReaction = createAsyncThunk("deleteReaction", async ( {id, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const response = await axios.put(`${baseURL}api/reactions/${id}`, null, headers);
        return response.data.response;
    }
    catch (error) {
        console.log(error)
        return {    
            payload: 'An error has ocurred'
        }
    }
});




const reactionActions = {
    getReaction,
    updateReaction,
    getUserReactions,
    deleteReaction
}

export default reactionActions;