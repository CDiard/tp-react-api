import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import LoginPage from "./Page/Login/LoginPage";
import Marvel from "./Page/Marvel/Marvel";

const Router = ({ children }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="marvel" element={<Marvel />} />
            </Routes>
            { children }
        </BrowserRouter>
    )
}

export default Router;