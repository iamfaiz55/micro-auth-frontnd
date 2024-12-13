import { createSlice } from "@reduxjs/toolkit";
import { authApi, IUser } from "./authApi";


export interface AuthState {
    user?: IUser | null;
}
const initialState: AuthState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") as string)
        : null,
};
const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                authApi.endpoints.login.matchFulfilled,
                (state, action) => {
                    const payload = action.payload as IUser;
                    state.user = payload;
                }
            )
            .addMatcher(
                authApi.endpoints.logout.matchFulfilled,
                (state) => {
                    localStorage.removeItem("user")
                    state.user = null;
                }
            )

    },
});

// Export the reducer, not the entire slice
export default authSlice.reducer;


