import BatteryGauge from "react-battery-gauge";
import {useAppSelector} from "../../../../common/hooks/hooks.ts";
import {EnergyPanel} from "./EnergyItemsStyles.tsx";
import {MAX_ENERGY} from "../../../../components/constants/Constants.ts";

export const EnergyItems = () => {
    const {energy} = useAppSelector(state => state.hamster);

    return (
        <EnergyPanel>
            <BatteryGauge
                size={100}
                orientation={"vertical"}
                maxValue={MAX_ENERGY}
                value={energy}
                customization={{
                    batteryMeter: {
                        fill: '#037da5',
                        lowBatteryFill: '#037da5'
                    },
                    readingText: {
                        fontSize: 0
                    },
                    batteryBody: {
                        strokeWidth: 2,
                        strokeColor: '#bcb3b3',
                    },
                    batteryCap: {
                        strokeWidth: 2,
                        strokeColor: '#bcb3b3',
                    },
                }}
            />
            <p>{energy}</p>
        </EnergyPanel>
    );
};
