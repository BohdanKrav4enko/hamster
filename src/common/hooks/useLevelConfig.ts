import type {LevelConfig} from "../types/types.ts";
import {useAppSelector} from "./hooks.ts";
import {levelConfigurations} from "../../components/levelConfigurations/LevelConfigurations.tsx";

export const useLevelConfig = (): LevelConfig => {
    const { currentLevel } = useAppSelector(state => state.hamster);

    const selectedLevelConfig = levelConfigurations.find(l => l.level === currentLevel) || {
        level: currentLevel,
        coins: currentLevel,
        price: Math.round(10 * Math.pow(currentLevel, 2.5))
    };

    return selectedLevelConfig;
};
