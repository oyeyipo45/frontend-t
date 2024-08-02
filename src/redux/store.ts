import { configureStore } from "@reduxjs/toolkit";
import { postAPI } from './api';

export const store = configureStore({
  reducer: {
    [postAPI.reducerPath]: postAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
});

/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;