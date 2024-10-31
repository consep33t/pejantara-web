import PropTypes from "prop-types";

const CardLayanan = ({ image, title, paragraph }) => {
  return (
    <div className="card-layanan w-[425px] h-[405px] bg-cardlayanan hover:bg-[#6C8776] hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out text-accent transition-all-300 rounded-2xl p-10 shadow-md shadow-black">
      <img src={image} />
      <h1 className="text-2xl font-semibold my-5">{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

CardLayanan.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

export default CardLayanan;
