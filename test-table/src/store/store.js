import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tableReducer from "./tableSlice";

const rootReducer = combineReducers({
  tableReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}