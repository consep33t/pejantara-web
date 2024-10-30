import PropTypes from "prop-types";

const BtnPrimary = (props) => {
  const { children, background, stroke, text } = props;
  return (
    <button
      type="button"
      className={`btn bg-${background} border-2 border-${stroke} hover:bg-primary-focus text-${text} font-semibold text-xl pb-1 text-left rounded-xl w-36 h-12`}
    >
      <a href={`/${children}`}>{children}</a>
    </button>
  );
};

BtnPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BtnPrimary;
