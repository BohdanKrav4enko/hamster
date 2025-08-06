import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {MAX_ENERGY} from "../components/constants/Constants.ts";


type HamsterState = {
    count: number;
    currentLevel: number;
    energy: number;
    error: string;
};

const initialState: HamsterState = {
    count: 0,
    currentLevel: 1,
    energy: MAX_ENERGY,
    error: "",
};

const hamsterSlice = createSlice({
    name: "hamster",
    initialState,
    reducers: {
        incrementCount(state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
        decrementEnergy(state, action: PayloadAction<number>) {
            state.energy = Math.max(0, state.energy - action.payload);
        },
        incrementEnergy(state, action: PayloadAction<number>) {
            state.energy = Math.min(MAX_ENERGY, state.energy + action.payload);
        },
        levelUp(state) {
            state.currentLevel += 1;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        clearError(state) {
            state.error = "";
        },
    },
});

export const { incrementCount, decrementEnergy, incrementEnergy, levelUp, setError, clearError } =
    hamsterSlice.actions;

export default hamsterSlice.reducer;
