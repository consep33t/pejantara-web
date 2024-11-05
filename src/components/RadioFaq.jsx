import PropTypes from "prop-types";

const RadioFaq = ({ pertanyaan, jawaban }) => {
  return (
    <>
      <div className="collapse collapse-arrow bg-white shadow-md">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">{pertanyaan}</div>
        <div className="collapse-content">
          <p>{jawaban}</p>
        </div>
      </div>
    </>
  );
};

RadioFaq.propTypes = {
  pertanyaan: PropTypes.string,
  jawaban: PropTypes.string,
};
export default RadioFaq;
