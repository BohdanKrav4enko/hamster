import styled from "styled-components";

type ErrorMessageTypeProps = {
    message: string
}

export const ErrorMessage = (props: ErrorMessageTypeProps ) => {
    const { message } = props


    return (
        <ErrorContainer>
            <p>Error: {message}</p>
        </ErrorContainer>
    );
};

export const ErrorContainer = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff4d4f;
    color: white;
    border-radius: 8px;
    padding: 10px 16px;
    min-width: 180px;
    max-width: 280px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    font-family: "Outfit", sans-serif;
    font-size: 14px;
    text-align: center;
    animation: fadeIn 0.3s ease-out;

    p {
        margin: 0;
        line-height: 1.4;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
