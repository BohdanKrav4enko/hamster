import img from "../../../assets/404.svg";
import {BackHomeButton, Wrapper, Image} from "./NotFoundStyles.tsx";

export const NotFound = () => {
    return (
        <Wrapper>
            <Image src={img} alt="404" />
            <BackHomeButton to="/">Return home</BackHomeButton>
        </Wrapper>
    );
};

