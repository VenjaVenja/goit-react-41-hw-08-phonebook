import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <h1>404 Page not found :( Please go to {' '}
        <Link to="/">Homepage</Link>
        </h1>
    )
};

export default NotFoundPage;