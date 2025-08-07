function LoadingIndicator() {
    return (
        <div className="absolute z-100 h-full w-full backdrop-blur-sm backdrop-brightness-50">
            <div className="relative top-50/100 left-50/100 h-25 w-25 -translate-50/100 animate-spin rounded-[50%] border-2 border-black/40 border-l-white"></div>
        </div>
    );
}

export default LoadingIndicator;
