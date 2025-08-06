import {useLevelConfig} from "../../../../../common/hooks/useLevelConfig.ts";
import {IncomeInfoContainer, IncomeItemContainer} from "./IncomeInfoStyles.tsx";
import {useAppSelector} from "../../../../../common/hooks/hooks.ts";

export const IncomeInfo = () => {
    const selectedLevelConfigurations = useLevelConfig()
    const perSecondIncome = useAppSelector(state => state.hamster.passiveIncome)

    return (
        <IncomeInfoContainer>
            <IncomeItemContainer>
                <span>Per second: </span>
                <span>{perSecondIncome}</span>
            </IncomeItemContainer>
            <IncomeItemContainer>
                <span>Per click: </span>
                <span>{selectedLevelConfigurations.coins}</span>
            </IncomeItemContainer>
        </IncomeInfoContainer>
    );
};
