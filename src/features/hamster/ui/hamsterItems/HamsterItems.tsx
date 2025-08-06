import img from "../../../../assets/hamster.webp";
import Tilt from 'react-parallax-tilt';
import {useAppDispatch, useAppSelector} from "../../../../common/hooks/hooks.ts";
import {incrementCount} from "../../../../store/hamsterSlice.ts";
import {HamsterPanel, StyledButton, StyledTextCount} from "./HamsterItemsStyles.tsx";


export const HamsterItems = () => {

    const { count } = useAppSelector(state => state.hamster);
    const dispatch = useAppDispatch();
    const addCountHandler = () => dispatch(incrementCount());

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
