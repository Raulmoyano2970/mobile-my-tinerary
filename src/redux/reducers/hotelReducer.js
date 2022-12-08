import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsActions";

const {
  getHotels,
  filterHotels,
  createNewHotel,
  deleteHotel,
  updateHotel,
  getHotelAdmin,
} = hotelsActions;
const initialState = {
  hotels: [],
  hotelsAdmin: [],
  order: "",
  search: "",
};
const hotelReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getHotels.fulfilled, (state, action) => {
      return { ...state, hotels: action.payload };
    })
    .addCase(filterHotels.fulfilled, (state, action) => {
      return {
        
        ...state,
        hotels: action.payload.response,
        search: action.payload.search,
        order: action.payload.order,
      };
    })
    .addCase(createNewHotel.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.hotels.push(action.payload.response);
      }
    })
    .addCase(getHotelAdmin.fulfilled, (state, action) => {
      return { ...state, hotelsAdmin: action.payload };
    })

    .addCase(deleteHotel.fulfilled, (state, action) => {
      let hotel = state.hotelsAdmin.filter(
        (hotel) => hotel.id !== action.payload.data._id
      );
      return { ...state, hotelsAdmin: hotel };
    })
    .addCase(updateHotel.fulfilled, (state, action) => {
      return { ...state };
    });
});

export default hotelReducer;
