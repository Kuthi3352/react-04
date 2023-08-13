import { combineReducers } from "redux";
import { movieBookingReducer } from "../MovieBooking/slice";
export const rootReducer = combineReducers({
    movieBooking: movieBookingReducer,
})