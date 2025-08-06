import {Outlet} from "react-router-dom";
import {RoutingButtons} from "../features/hamster/ui/routingButtons/RoutingButtons.tsx";
import {ErrorMessage} from "../components/errorMessage/errorMessage.tsx";
import {useAppSelector} from "../common/hooks/hooks.ts";
import {useHamsterTimers} from "../common/hooks/useHamsterTimers.ts";


export const Layout = () => {
    const {error } = useAppSelector(state => state.hamster);
    useHamsterTimers()

    return (
        <>
            <Outlet/>
            {error && <ErrorMessage/>}
            <RoutingButtons/>
        </>
    );
};
