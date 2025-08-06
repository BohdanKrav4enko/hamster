import {PATH} from "../../../../route/path/Path.tsx";
import {RoutingButtonsContainer, StyledLink} from "./RoutingButtonsStyles.tsx";

export const RoutingButtons = () => {
    return (
        <RoutingButtonsContainer>
            <StyledLink to={PATH.HOME_PAGE}>HOME</StyledLink>
            <StyledLink to={PATH.SHOP}>SHOP</StyledLink>
            <StyledLink to={PATH.ERROR}>NOT FOUND</StyledLink>
        </RoutingButtonsContainer>
    );
};
