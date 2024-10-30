import PropTypes from "prop-types";

const BtnPrimary = (props) => {
  const { children } = props;
  return (
    <button
      type="button"
      className={`btn bg-primary border-2 border-primary text-background hover:text-accent hover:bg-background hover:border-primary hover:scale-105 font-semibold text-xl pb-1 text-left rounded-xl w-36 h-12`}
    >
      <a href={`/${children}`}>{children}</a>
    </button>
  );
};

BtnPrimary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BtnPrimary;
