import { Link } from "react-router-dom";

function SecondaryLink({ target, children }) {
    return (
        <Link to={target}>
            <p className="text-center text-gray-600 hover:underline">
                {children}
            </p>
        </Link>
    );
}

export default SecondaryLink;
