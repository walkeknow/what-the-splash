import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer";
import imagesReducer from "./imagesReducer";
import errorReducer from "./errorReducer";
import pageReducer from './pageReduer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer
});

export default rootReducer