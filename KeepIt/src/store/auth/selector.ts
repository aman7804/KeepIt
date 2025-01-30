import { createSelector } from "reselect";
import { get } from "lodash";

// import { RootState } from "store/root/root.reducer";
// import { isTokenForAdmin } from "utils/helper";
import { RootState } from "../root/root.reducer";

const getState = (state: RootState) => state;

export const getAuthSelector =
    createSelector(getState, (state) => get(state, "auth.token"));