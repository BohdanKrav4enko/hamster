import { configureStore } from "@reduxjs/toolkit";
import hamsterReducer from "./hamsterSlice";

export const store = configureStore({
    reducer: {
        hamster: hamsterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
