import { createSlice } from "@reduxjs/toolkit";
import {levelConfigurations} from "../components/levelConfigurations/LevelConfigurations.tsx";
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
        incrementCount(state) {
            const selectedLevelConfig = levelConfigurations.find(i => i.level === state.currentLevel) || {
                level: state.currentLevel,
                coins: state.currentLevel,
                price: Math.round(10 * Math.pow(state.currentLevel, 2.5))
            };

            if (state.energy > 0) {
                state.count += selectedLevelConfig.coins;
                state.energy -= 1;
            } else {
                state.error = "No energy";
            }

            if (state.count >= selectedLevelConfig.price) {
                state.currentLevel += 1;
            }
        },
        incrementEnergy(state) {
            if (state.energy < MAX_ENERGY) {
                state.energy += 1;
            }
        },
        clearError(state) {
            state.error = "";
        },
    },
});

export const { incrementCount, incrementEnergy, clearError } = hamsterSlice.actions;
export default hamsterSlice.reducer;
