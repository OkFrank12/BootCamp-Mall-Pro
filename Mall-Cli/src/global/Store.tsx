import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import rootReducer from "./GlobalState";
import storage from "redux-persist/lib/storage";

const config = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE, PERSIST],
      },
    }),
});
