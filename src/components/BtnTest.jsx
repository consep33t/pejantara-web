import PropTypes from "prop-types";

const BtnTest = ({children, type}) => {
  // const isPrimary = ()=>{
  //   return type==="primary"?
  //       `btn bg-primary border-2 border-primary text-background hover:text-accent hover:bg-background hover:border-primary hover:scale-105 font-semibold text-xl pb-1 text-left rounded-xl w-36 h-12`:
  //       `btn bg-background border-2 border-primary hover:bg-primary-focus text-accent hover:text-background hover:border-primary hover:bg-primary hover:scale-105 font-semibold text-xl pb-1 text-left rounded-xl w-36 h-12`
  // }
  // return (
  //   <button
  //     type="button"
  //     className={isPrimary()}
  //   >
  //     <a href={`/${children}`}>{children}</a>
  //   </button>
  // );
  const background = type==="primary"?"bg-primary":"bg-background"
  const BtnStyling = `btn ${background} border-2 border-primary text-background hover:text-accent hover:bg-background hover:border-primary hover:scale-105 font-semibold text-xl pb-1 text-left rounded-xl w-36 h-12`
  return (
    <button
      type="button"
      className={BtnStyling}
    >
      <a href={`/${children}`}>{children}</a>
    </button>
  );
};

BtnTest.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BtnTest;
