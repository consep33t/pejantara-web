import { Helmet } from "react-helmet-async";
import HeroEdukasi from "../../components/HeroEdukasi";
const Edukasi = () => {
  return (
    <div>
      <Helmet>
        <title>Edukasi Page</title>
      </Helmet>
      <HeroEdukasi />
      <div className="w-full h-screen flex items-end">
        <div className="section-2 w-full h-[90%] bg-accent">
          <div className="container-title w-full h-1/5 flex justify-center">
            <div className="title bg-secondary w-1/2 h-full translate-y-[-20%] rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="section-3 w-full h-screen"></div>
    </div>
  );
};

export default Edukasi;
