import { Link } from "react-router-dom";

function PrimaryLink({ target, children }) {
    return (
        <Link to={target}>
            <p className="-mt-3.5 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline">
                {children}
            </p>
        </Link>
    );
}

export default PrimaryLink;
