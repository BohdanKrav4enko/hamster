import img from "../../../../assets/hamster.webp";
import styled from "styled-components";
import Tilt from 'react-parallax-tilt';

export const HamsterPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const StyledTextCount = styled.p`
    font-family: "Outfit", sans-serif;
    font-size: 50px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 8px;
    color: white;
`;

export const StyledButton = styled.button`
    border: none;
    background-color: inherit;
    user-select: none;
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:active {
        transform: scale(1.008);
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
        pointer-events: none;
    }

`
type LevelProgressBarProps = {
    count: number;
    addCountHandler: () => void;
}
export const HamsterItems = (props: LevelProgressBarProps) => {
    const {count, addCountHandler} = props
    return (
        <HamsterPanel>
            <div>
                <StyledTextCount>$ {count}</StyledTextCount>
            </div>
            <Tilt>
                <StyledButton onClick={addCountHandler}><img src={img} alt='hamser'/></StyledButton>
            </Tilt>
        </HamsterPanel>
    );
};
