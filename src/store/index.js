import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import likeReducer from "./likes";
import userReducer from "./user";
import videosReducer from "./videos";

const reducer = combineReducers({
  user: userReducer,
  videos: videosReducer,
  like: likeReducer,
});

const persistConfg = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfg, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
