import {LevelProgressBar} from "./levelProgressBar/LevelProgressBar.tsx";
import {IncomeInfo} from "./incomeInfo/IncomeInfo.tsx";
import styled from "styled-components";

export type LevelConfig = {
    level: number;
    coins: number;
    price: number;
};
export type LevelProgressBarProps = {
    currentLevel?: number;
    count?: number;
    selectedLevelConfigurations: LevelConfig;
};

export const TopInfoPanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TopInfoPanel = (props: LevelProgressBarProps) => {
    const {currentLevel, count, selectedLevelConfigurations} = props
    return (
        <TopInfoPanelContainer>
            <LevelProgressBar currentLevel={currentLevel}
                              count={count}
                              selectedLevelConfigurations={selectedLevelConfigurations}/>
            <IncomeInfo selectedLevelConfigurations={selectedLevelConfigurations}/>
        </TopInfoPanelContainer>
    );
};
