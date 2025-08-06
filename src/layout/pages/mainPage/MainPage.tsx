import {HamsterItems} from "../../../features/hamster/ui/hamsterItems/HamsterItems.tsx";
import {EnergyItems} from "../../../features/hamster/ui/energyItems/EnergyItems.tsx";
import {TopInfoPanel} from "../../../features/hamster/ui/topInfoPanel/TopInfoPanel.tsx";

export const MainPage = () => {

    return (
        <>
            <TopInfoPanel/>
            <HamsterItems/>
            <EnergyItems/>
        </>
    )
}