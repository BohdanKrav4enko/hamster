import BatteryGauge from "react-battery-gauge";
import styled from "styled-components";

type EnergyItemsProps = {
    energy: number
}
export const EnergyPanel = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-family: "Outfit", sans-serif;
        font-weight: 600;
        color: white;
    }
    
`
export const EnergyItems = (props: EnergyItemsProps) => {
    const {energy} = props
    return (
        <EnergyPanel>
            <BatteryGauge
                size={100}
                orientation={"vertical"}
                maxValue={100}
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
