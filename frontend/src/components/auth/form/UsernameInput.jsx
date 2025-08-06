function UsernameInput({ value, onChange }) {
    return (
        <label className="relative inline-block max-w-fit">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-person-fill absolute top-1/2 left-0 ml-2 -translate-y-50/100 text-gray-400"
                viewBox="0 0 16 16"
            >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            <input
                id="username"
                name="username"
                className="w-100 rounded-md border-3 border-transparent bg-white p-3 pl-7.5 outline-1 outline-gray-300 transition-all duration-300 placeholder:select-none focus:border-blue-400/80"
                type="text"
                aria-label="username input"
                placeholder="Username"
                autoComplete="off"
                autoFocus
                required
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default UsernameInput;
