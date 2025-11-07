import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1 className="text-gray-500 pb-2">404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
