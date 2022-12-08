import cityReducer from "./cityReducer";
import hotelReducer from "./hotelReducer";
import tineraryReducer from "./tineraryReducer";
import showReducer from "./showReducer";
import userReducer from "./userReducer";
import reactionReducer from "./reactionReducer"
import commentsReducers from './commentsReducers';

const rootReducer = {
  cityReducer,
  hotelReducer,
  tineraryReducer,
  showReducer,
  userReducer,
  reactionReducer,
  commentsReducers
};

export default rootReducer;
