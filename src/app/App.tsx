import {AppRouter} from "../route/AppRouter.tsx";
import StarryBackground from "../components/starryBackground/StarryBackground.tsx";
import {GlobalStyles} from "../styles/GlobalStyles.ts";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <StarryBackground />
            <AppRouter/>
        </>
    )
}


