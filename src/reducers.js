import { combineReducers } from "redux";
import eventsReducer from "../src/slices/eventSlice";


const rootReducer = combineReducers({
  events: eventsReducer,
  
});

export default rootReducer;
