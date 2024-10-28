import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <h1 className="">Home Page</h1>
        <p>Welcome to the Home page!</p>
      </div>
    </>
  );
};

export default Home;
