import {Link} from "react-router-dom";
import {PATH} from "../../../../route/path/Path.tsx";
import styled from "styled-components";

export const RoutingButtons = () => {
    return (
        <RoutingButtonsContainer>
            <StyledLink to={PATH.HOME_PAGE}>HOME</StyledLink>
            <StyledLink to={PATH.SHOP}>Shop</StyledLink>
            <StyledLink to={PATH.ERROR}>NOT FOUND</StyledLink>
        </RoutingButtonsContainer>
    );
};

export const RoutingButtonsContainer = styled.div`
    height: 100%;
    max-height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    border-top: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(7, 44, 96, 0.33);
    position: fixed;
    bottom: 0;
    z-index: 10;
`;

export const StyledLink = styled(Link)`
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: scale(1.05);
        color: #a5c8ff;
    }

    &:active {
        transform: scale(0.97);
        background-color: rgba(255, 255, 255, 0.2);
    }
`;