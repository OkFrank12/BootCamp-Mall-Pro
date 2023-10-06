import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./GlobalState";
import {
  FLUSH,
  PERSIST,
  REHYDRATE,
  REGISTER,
  persistReducer,
  PAUSE,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PERSIST, REHYDRATE, REGISTER, PAUSE, PURGE],
      },
    }),
});
