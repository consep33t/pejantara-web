import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div>
      <Helmet>
        <title>404 Page</title>
      </Helmet>
      <h1>404 Page</h1>
      <p>Page not found: {location.pathname}</p>
    </div>
  );
};
export default NotFound;
