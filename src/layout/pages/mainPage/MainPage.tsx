import {useEffect, useState} from "react";
import {MAX_ENERGY} from "../../../components/constants/Constants.ts";
import {levelConfigurations} from "../../../components/levelConfigurations/LevelConfigurations.tsx";
import {HamsterItems} from "../../../features/hamster/ui/hamsterItems/HamsterItems.tsx";
import {EnergyItems} from "../../../features/hamster/ui/energyItems/EnergyItems.tsx";
import {TopInfoPanel} from "../../../features/hamster/ui/topInfoPanel/TopInfoPanel.tsx";
import {ErrorMessage} from "../../../components/errorMessage/errorMessage.tsx";


export const MainPage = () => {

    const [count, setCount] = useState(0);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [energy, setEnergy] = useState(MAX_ENERGY);
    const [error, setError] = useState('');


    useEffect(() => {
        const timer = setInterval(() => {
            if (error) {
                setError(``)
            }
        }, 2000)
        return () => clearInterval(timer)
    }, [error])
    useEffect(() => {
        const timer = setInterval(() => {
            if (energy < MAX_ENERGY) {
                setEnergy(energy + 1)
            }
        }, 500)
        return () => clearInterval(timer)
    }, [energy])

    const selectedLevelConfigurations = levelConfigurations.find(i => i.level === currentLevel) || {
        level: currentLevel,
        coins: currentLevel,
        price: Math.round(10 * Math.pow(currentLevel, 2.5))
    };
    const addCountHandler = () => {
        if (energy > 0) {
            setCount(count + selectedLevelConfigurations.coins);
            setEnergy(energy - 1)
        } else {
            setError('No energy')
        }
        if (count >= selectedLevelConfigurations.price) {
            setCurrentLevel(currentLevel + 1);
        }
    }

    return (
        <>
            <TopInfoPanel currentLevel={currentLevel}
                          count={count}
                          selectedLevelConfigurations={selectedLevelConfigurations}/>
            <HamsterItems count={count}
                          addCountHandler={addCountHandler}/>
            <EnergyItems energy={energy}/>

            {error && <ErrorMessage message={error}/>}
        </>
    )
}


