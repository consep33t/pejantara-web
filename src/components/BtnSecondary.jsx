import PropTypes from "prop-types";

const BtnSecondary = (props) => {
  const { children } = props;
  return (
    <button
      type="button"
      className={`btn bg-background border-2 border-primary hover:bg-primary-focus text-accent hover:text-background hover:border-primary hover:bg-primary hover:scale-105 font-semibold text-xl pb-1 text-left rounded-xl w-36 h-12`}
    >
      <a href={`/${children}`}>{children}</a>
    </button>
  );
};

BtnSecondary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BtnSecondary;