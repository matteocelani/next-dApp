import { configureStore, combineReducers } from "@reduxjs/toolkit";
import account from "./reducers/account";

const combinedReducers = combineReducers({
  account,
});

export const store = configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
