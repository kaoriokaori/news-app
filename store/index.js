import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./userSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["someReducer"], // ここに非シリアライズ可能な値を含む可能性のあるリデューサーを指定
};
const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
