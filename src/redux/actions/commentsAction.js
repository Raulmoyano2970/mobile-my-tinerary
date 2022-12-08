import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../../url";

const createComment = createAsyncThunk("createComment", async (datos) => {
    console.log(datos);
    let headers = { headers: { Authorization: `Bearer ${datos.headers}` } };//lo autorizamos con el bearer
    let url = `${baseURL}api/comments`;
    try {
        const res = await axios.post(url, datos.data, headers);
        console.log(res);
        return {
            success: true,
            comments: res.response.data

        };
    } catch (error) {

        return {
            success: false,
            response: error.response.data.message,
        };
    }
});

const getComment = createAsyncThunk("getComment", async ({ id }) => {
    let url = `${baseURL}api/comments?showId=${id}`;
    try {
        const res = await axios.get(url);
        return {
            comments: res.data.response,
        };
    } catch (error) {
        console.log(error);
        return {
            payload: "Error",
        };
    }
});
const deleteComment = createAsyncThunk(
    "deleteComment",
    async (data) => {
        let headers = { headers: { Authorization: `Bearer ${data.token}` } };
        let url = `${baseURL}api/comments/${data.idComment}`;
        try {
            const res = await axios.delete(url, headers);
            console.log(res);
            return {
                shows: res.data,
                data: res.data.res,
            };
        } catch (error) {
            if (error.response) {
                throw error.response.data.message.join("\n");
            } else {
                throw error;
            }
        }
    }
);
const editComment = createAsyncThunk("editComment", async (data) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}` } };
    let url = `${baseURL}api/comments/${data.id}`;

    try {
        let res = await axios.put(url, data.edit, headers)
        console.log(res);
        return {
            success: true,
            id: res.data.id,
            comment: data.edit.comment

        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            response: "Error",
        };
    }

})


const usersActions = {
    createComment,
    getComment,
    deleteComment,
    editComment,
};

export default usersActions;