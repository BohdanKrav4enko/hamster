import ProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";
import type {LevelProgressBarProps} from "../TopInfoPanel.tsx";


export const ProgressBarPanel = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    p{
        font-family: "Outfit", sans-serif;
        font-weight: 600;
        color: white;
    }
`
export const LevelProgressBar = (props: LevelProgressBarProps) => {
    const {currentLevel, count, selectedLevelConfigurations} = props
    return (
        <ProgressBarPanel>
            <p>Level: {currentLevel}</p>
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
