import { Routes, Route, Navigate, HashRouter} from "react-router-dom";
import {MainPage} from "../layout/pages/mainPage/MainPage.tsx";
import {NotFound} from "../layout/pages/notFound/NotFound.tsx";
import {PATH} from "./path/Path.tsx";
import {ShopPage} from "../layout/pages/shop/ShopPage.tsx";
import {Layout} from "../layout/Layout.tsx";

export const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={PATH.HOME_PAGE} element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={PATH.SHOP} element={<ShopPage/>}/>
                    <Route path={PATH.ERROR} element={<NotFound/>}/>
                    <Route path="*" element={<Navigate to={PATH.ERROR} replace/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
};
