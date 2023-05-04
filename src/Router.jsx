import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import LoginPage from "./Page/Login/LoginPage";

const Router = ({ children }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
            { children }
        </BrowserRouter>
    )
}

export default Router;