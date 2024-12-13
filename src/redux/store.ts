// src/store/index.ts (example)

import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import authSlice from './authSlice';

const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;


export default reduxStore;
