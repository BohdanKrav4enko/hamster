import {Outlet} from "react-router-dom";
import {RoutingButtons} from "../features/hamster/ui/routingButtons/RoutingButtons.tsx";
import {ErrorMessage} from "../components/errorMessage/errorMessage.tsx";
import {useAppSelector} from "../common/hooks/hooks.ts";
import {useHamsterTimers} from "../common/hooks/useHamsterTimers.ts";
import {LayoutWrapper} from "./LayoutStyles.tsx";


export const Layout = () => {
    const {error} = useAppSelector(state => state.hamster);
    useHamsterTimers()

    return (
        <>
            <LayoutWrapper>
                <Outlet/>
            </LayoutWrapper>
            {error && <ErrorMessage/>}
            <RoutingButtons/>
        </>
    );
};
