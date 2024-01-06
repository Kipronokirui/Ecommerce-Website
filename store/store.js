import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {cartSlice} from "./features/cartSlice";
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = configureStore({
    reducer:{
        cart:cartSlice.reducer
    },
})

// export const RootState = store.getState
// export const AppDispatch = store.dispatch

// export const useAppDispatch = () => AppDispatch = useDispatch