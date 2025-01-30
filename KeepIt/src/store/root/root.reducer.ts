import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authReducer from "../auth/reducer"

const rootReducer = combineReducers<unknown>({
  auth: persistReducer(
    {
      key: "main-root",
      storage,
    },
    authReducer,
  )
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;