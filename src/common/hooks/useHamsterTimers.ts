import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {clearError, incrementEnergy} from "../../store/hamsterSlice.ts";
import {MAX_ENERGY} from "../../components/constants/Constants.ts";
import {useEffect} from "react";


export const useHamsterTimers = () => {
    const dispatch = useAppDispatch();
    const { error, energy } = useAppSelector(state => state.hamster);

    useEffect(() => {
        const timer = setInterval(() => {
            if (error) {
                dispatch(clearError())
            }
        }, 2000)
        return () => clearInterval(timer)
    }, [error, dispatch])
    useEffect(() => {
        const timer = setInterval(() => {
            if (energy < MAX_ENERGY) {
                dispatch(incrementEnergy())
            }
        }, 500)
        return () => clearInterval(timer)
    }, [energy, dispatch])
};
