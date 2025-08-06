import type {LevelProgressBarProps} from "../TopInfoPanel.tsx";
import styled from "styled-components";

export const IncomeInfoContainer = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-between;
`
export const IncomeItemContainer = styled.div`
    gap: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    span{
        font-family: "Outfit", sans-serif;
        color: white;
    }
`

export const IncomeInfo = (props: LevelProgressBarProps) => {
    const {selectedLevelConfigurations} = props
    return (
        <IncomeInfoContainer>
            <IncomeItemContainer>
                <span>Per second: </span>
                <span>###</span>
            </IncomeItemContainer>
            <IncomeItemContainer>
                <span>Per click: </span>
                <span>{selectedLevelConfigurations.coins}</span>
            </IncomeItemContainer>
        </IncomeInfoContainer>
    );
};
