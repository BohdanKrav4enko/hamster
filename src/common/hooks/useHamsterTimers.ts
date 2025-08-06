import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {clearError, incrementEnergy, passiveIncrementCount} from "../../store/hamsterSlice.ts";
import {MAX_ENERGY} from "../../components/constants/Constants.ts";
import {useEffect} from "react";


export const useHamsterTimers = () => {
    const dispatch = useAppDispatch();
    const { error, energy } = useAppSelector(state => state.hamster);
    const abilities = useAppSelector(state => state.abilities.list);

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
        }, 800)
        return () => clearInterval(timer)
    }, [energy, dispatch])

    useEffect(()=>{
        const timer = setInterval(() => {
            const totalIncome = abilities
                .map(a => a.income * a.owned)
                .reduce((sum, val) => sum + val, 0);
            dispatch(passiveIncrementCount(totalIncome));
        }, 1000)
        return () => clearInterval(timer)
    }, [dispatch, abilities])
};
