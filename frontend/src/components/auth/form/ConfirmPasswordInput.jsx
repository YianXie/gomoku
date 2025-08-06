import { useState } from "react";

function ConfirmPasswordInput({ value, onChange }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <label className="relative inline-block max-w-fit">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lock-fill absolute top-50/100 left-0 ml-2 -translate-y-50/100 text-gray-400"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                />
            </svg>
            <input
                id="confirm-password"
                name="confirm-password"
                className="w-100 rounded-md border-3 border-transparent bg-white p-3 pl-7.5 outline-1 outline-gray-300 transition-all duration-300 placeholder:select-none focus:border-blue-400/80"
                type={passwordVisible ? "text" : "password"}
                aria-label="confirm password input"
                placeholder="Confirm password"
                required
                value={value}
                onChange={onChange}
            />
            {passwordVisible ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-eye-fill bi bi-eye-slash-fill absolute top-50/100 right-0 mr-4 -translate-y-50/100 cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-600"
                    viewBox="0 0 16 16"
                    onClick={() => {
                        setPasswordVisible(false);
                    }}
                >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-eye-slash-fill absolute top-50/100 right-0 mr-4 -translate-y-50/100 cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-600"
                    viewBox="0 0 16 16"
                    onClick={() => {
                        setPasswordVisible(true);
                    }}
                >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                </svg>
            )}
        </label>
    );
}

export default ConfirmPasswordInput;
