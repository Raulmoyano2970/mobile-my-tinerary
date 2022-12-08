import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionActions";

const { getUserReactions, deleteReaction } = reactionActions;

const initialState = {
    reaction: []
};

const reactionReducer = createReducer(initialState,
    (builder) => {
        builder

            .addCase(getUserReactions.fulfilled, (state, action) => {
                return { ...state, reaction: action.payload.response }
            })

            .addCase(deleteReaction.fulfilled, (state, action) => {
                let myreaction = state.reaction.filter(reaction => reaction._id !== action.payload._id)
                return { ...state, reaction: myreaction }
            })

    })

export default reactionReducer;

// import { createReducer } from "@reduxjs/toolkit";
// import reactionActions from "../actions/reactionActions";

// const { getReaction, updateReaction } = reactionActions;

// const initialState = {
//     allReactions: [],
//     reaction: {},
//     itineraryId: ''
// };

// const reactionReducer = createReducer(initialState,
//     (builder) => {

//         builder
//             .addCase(getReaction.fulfilled, (state, action) => {
//                 console.log(action.payload)
//                 return { ...state, 
//                     allReactions: action.payload.response,
//                     reqId: action.payload.reqId
//             }})

//             .addCase(updateReaction.fulfilled, (state, action) => {
//                 return { ...state, reaction: action.payload }})
//             })

// export default reactionReducer;