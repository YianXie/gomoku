import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/global/ProtectedRoute";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Game from "./pages/Game";
import NotFound from "./pages/NotFound";

function Logout() {
    localStorage.clear();
    return <Navigate to="/login" />;
}

function RegisterAndLogout() {
    localStorage.clear();
    return <Navigate to={"/register"} />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="logout" element={<Logout />} />
                    <Route
                        path="game"
                        // Login is required to access the game page
                        element={
                            <ProtectedRoute>
                                <Game />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
