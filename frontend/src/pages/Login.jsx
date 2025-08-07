import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "../components/global/LoadingIndicator";
import FormTitle from "../components/auth/form/FormTitle";
import UsernameInput from "../components/auth/form/UsernameInput";
import PasswordInput from "../components/auth/form/PasswordInput";
import SubmitButton from "../components/auth/form/SubmitButton";
import PrimaryLink from "../components/auth/form/PrimaryLink";
import SecondaryLink from "../components/auth/form/SecondaryLink";
import gradient_bg from "../assets/images/auth/form/login-gradient-bg.jpeg";
import login_bg from "../assets/images/auth/form/login-bg.jpg";

function Login() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post("/api/token/", { username, password });
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate("/");
        } catch (error) {
            console.error("Error while logging in:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="flex h-full flex-wrap place-content-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${gradient_bg})` }}
        >
            {loading && <LoadingIndicator />}
            <div className="flex h-85/100 w-85/100 gap-5 rounded-3xl bg-gray-100 p-5 shadow-2xl">
                <form
                    onSubmit={handleSubmit}
                    className="flex w-50/100 flex-col flex-wrap place-content-center gap-5 pt-10 pb-10"
                >
                    <FormTitle>Welcome Back!</FormTitle>
                    <UsernameInput
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <PasswordInput
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <div className="flex items-center justify-between">
                        <PrimaryLink target={"/"}>Reset Password</PrimaryLink>
                        <PrimaryLink target={"/register"}>Sign up</PrimaryLink>
                    </div>
                    <SubmitButton>Login</SubmitButton>
                    <SecondaryLink target={"/"}>
                        Continue as guest
                    </SecondaryLink>
                </form>
                <div
                    className="h-full w-50/100 rounded-3xl bg-cover bg-center bg-no-repeat shadow-xl"
                    style={{ backgroundImage: `url(${login_bg})` }}
                >
                    <p>You have a 23 days streak!</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
