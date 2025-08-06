import styled from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: calc(100vh - 100px); // Учитываем отступ для футера
    padding: 20px;
    box-sizing: border-box;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 800px;
    height: auto;
`;

export const BackHomeButton = styled(Link)`
    margin-top: 20px;
    padding: 12px 24px;
    background-color: #222;
    color: #ffdd57;
    font-weight: bold;
    border: 2px solid #ffdd57;
    border-radius: 10px;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: #ffdd57;
        color: #222;
    }
`;
