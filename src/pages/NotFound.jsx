import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="mb-8">
            We can't seem to find the page you're looking for.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
