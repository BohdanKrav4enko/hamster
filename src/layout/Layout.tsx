import {Outlet} from "react-router-dom";
import {RoutingButtons} from "../features/hamster/ui/routingButtons/RoutingButtons.tsx";

export const Layout = () => {
    return (
        <>
            <Outlet/>
            <RoutingButtons/>
        </>
    );
};
