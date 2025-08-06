import {useLevelConfig} from "../../../../../common/hooks/useLevelConfig.ts";
import {IncomeInfoContainer, IncomeItemContainer} from "./IncomeInfoStyles.tsx";

export const IncomeInfo = () => {
    const selectedLevelConfigurations = useLevelConfig()

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
