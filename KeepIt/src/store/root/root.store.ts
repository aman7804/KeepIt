import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.reducer";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
  devTools: true, // Force enable Redux DevTools
  // devTools: import.meta.env.MODE !== "production", // Enable Redux DevTools only in development
});

export default store;
export type AppDispatch = typeof store.dispatch;

export const persistStorage = persistStore(store);