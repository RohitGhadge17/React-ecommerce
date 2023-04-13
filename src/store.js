import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from './features/tabs/tabSlice';
 

 const reducer = persistReducer(reducer)
 export const store = configureStore({
     reducer: {
         tabs: tabsReducer,
     },
 })