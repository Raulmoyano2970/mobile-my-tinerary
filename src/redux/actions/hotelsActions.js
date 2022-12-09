import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../url";

const getHotels = createAsyncThunk("getHotels", async () => {
    const res = await axios.get(`${baseURL}api/hotels`);
    return res.data.data;
})

const filterHotels = createAsyncThunk("filterHotels", async (data) => {
  try {
    const res = await axios.get(
      `${baseURL}api/hotels?name=${data.search}`
    );
    let info = {
      response: res.data.data,
      search: data.search,
    };
    return info;
  } catch (error) {
    let info = {
      response: [],
      search: data.search,

    };
    return info;
  }
});
const createNewHotel = createAsyncThunk("newHotel", async (newHotel) => {
  try {
    const res = await axios.post(`${baseURL}api/hotels`, newHotel);
    if (res.data.id) {
      let info = {
        id: res.data.id,
        success: true,
        response: newHotel,
      };
      return info;
    } else {
      let info = {
        success: false,
        messages: res.data.message,
      };
      return info;
    }
  } catch (error) {
    return {
      success: false,
      response: "An error ocurred",
    };
  }
});
const getHotelAdmin = createAsyncThunk("getHotelAdmin", async (id) => {
  try {
    const res = await axios.get(`${baseURL}api/hotels?userId=${id}`);
    return res.data.data;
  } catch (error) {
    return {
      payload: "Error",
    };
  }
});

const deleteHotel = createAsyncThunk("deleteHotel", async ({id, token}) => {
  let headers = {headers:{Authorization: `Bearer ${token}`}}
  try {
    const res = await axios.delete(`${baseURL}api/hotels/${id}`, headers);
    return res.data;
  } catch (error) {
    return {
      payload: "Error",
    };
  }
});

const updateHotel = createAsyncThunk("updateHotel", async ({data, token}) => {
  let headers = {headers:{Authorization: `Bearer ${token}`}}
  try {
    const res = await axios.patch(
      `${baseURL}api/hotels/${data.id}`, headers,
      data.hotels
    );
    return res.data;
  } catch (error) {
    return {
      payload: "Error",
    };
  }
});

const hotelsActions = {
  getHotels,
  filterHotels,
  createNewHotel,
  getHotelAdmin,
  deleteHotel,
  updateHotel,
};

export default hotelsActions;
