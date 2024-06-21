import { apiSlice } from "./../features/dogs/dogs-api-slice";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
