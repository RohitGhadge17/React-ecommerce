import { configureStore } from "@reduxjs/toolkit";
 import tabsReducer from './features/tabs/tabSlice';
 import { persistStore, persistReducer } from "redux-persist";

 const reducer = persistReducer(reducer)
 export const store = configureStore({
     reducer: {
         tabs: tabsReducer,
     },
 })