import { Helmet } from "react-helmet-async";
import Layanan from "../../LayoutComponents/Layanan";
import SecondHero from "../../components/SecondHero";
import Galeri from "../../LayoutComponents/Galeri";
import PertanyaanUmum from "../../LayoutComponents/PertanyaanUmum";
import Hero from "../../components/Hero";
const Beranda = () => {
  return (
    <>
      <Helmet>
        <title>Beranda</title>
      </Helmet>
      <Hero />
      <Layanan />
      <SecondHero />
      <Galeri />
      <PertanyaanUmum />
    </>
  );
};

export default Beranda;
