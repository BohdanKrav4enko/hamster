import ProgressBar from "@ramonak/react-progress-bar";
import {useAppSelector} from "../../../../../common/hooks/hooks.ts";
import {useLevelConfig} from "../../../../../common/hooks/useLevelConfig.ts";
import {ProgressBarPanel} from "./LevelProgressBarStyles.tsx";

export const LevelProgressBar = () => {

    const { count } = useAppSelector(state => state.hamster);
    const selectedLevelConfigurations = useLevelConfig()

    return (
        <ProgressBarPanel>
            <p>Level: {selectedLevelConfigurations.level}</p>
            <ProgressBar completed={count!}
                         maxCompleted={selectedLevelConfigurations.price}
                         isLabelVisible={false}
                         labelAlignment="outside"
                         height="20px"
                         borderRadius="2px"
                         bgColor='#037da5'
                         baseBgColor="#ddd"
                         transitionDuration="0.1s"
            />
        </ProgressBarPanel>
    );
};
