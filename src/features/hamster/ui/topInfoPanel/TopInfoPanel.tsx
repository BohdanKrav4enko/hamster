import {LevelProgressBar} from "./levelProgressBar/LevelProgressBar.tsx";
import {IncomeInfo} from "./incomeInfo/IncomeInfo.tsx";
import {TopInfoPanelContainer} from "./TopInfoPanelStyles.tsx";

export const TopInfoPanel = () => {
    return (
        <TopInfoPanelContainer>
            <LevelProgressBar/>
            <IncomeInfo />
        </TopInfoPanelContainer>
    );
};
