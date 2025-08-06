import { configureStore } from "@reduxjs/toolkit";
import hamsterReducer from "./hamsterSlice";
import abilitiesReducer from "./abilitiesSlice";
import {loadState, saveState} from "../common/utils/localStorage.ts";

const persistedState = loadState("gameState");

export const store = configureStore({
    reducer: {
        hamster: hamsterReducer,
        abilities: abilitiesReducer,
    },
    preloadedState: persistedState,
});
store.subscribe(() => {
    saveState("gameState", store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
