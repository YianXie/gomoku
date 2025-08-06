function SubmitButton({ children }) {
    return (
        <button
            type="submit"
            className="mt-5 w-100 cursor-pointer rounded-md bg-red-400 p-4 text-xl text-white shadow-xl transition-opacity duration-300 select-none hover:opacity-80 active:translate-y-1"
        >
            {children}
        </button>
    );
}

export default SubmitButton;
