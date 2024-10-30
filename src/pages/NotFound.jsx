import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="not-found w-full h-screen flex flex-col items-center justify-center">
      <Helmet>
        <title>404 Page</title>
      </Helmet>
      <h1>404 Page</h1>
      <p>Page not found: {location.pathname}</p>
      <a href="/">Kembali ke Beranda</a>
    </div>
  );
};
export default NotFound;
