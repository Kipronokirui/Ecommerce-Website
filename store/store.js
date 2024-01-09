import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {cartSlice} from "./features/cartSlice";
import { composeWithDevTools } from '@redux-devtools/extension';
// import storage from 'redux-persist/lib/storage';
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const createNoopStorage = () => {
    return {
      getItem(_key) {
        return Promise.resolve(null);
      },
      setItem(_key, value) {
        return Promise.resolve(value);
      },
      removeItem(_key) {
        return Promise.resolve();
      },
    };
};
const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();
const persistConfig = {
    key: 'root',
    storage,
  }

export const store = configureStore({
    reducer:{
        cart:persistReducer(persistConfig, cartSlice.reducer)
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
// export const RootState = store.getState
// export const AppDispatch = store.dispatch

// export const useAppDispatch = () => AppDispatch = useDispatch