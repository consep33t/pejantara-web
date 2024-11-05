import PropTypes from "prop-types";

const GaleriComponent = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="col-span-2 row-span-5 bg-slate-500 rounded-xl">
        {data.slice(0, 1).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>
      <div className="row-span-3 col-start-3 bg-slate-500 rounded-xl">
        {data.slice(1, 2).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>
      <div className="row-span-3 col-start-4 bg-slate-500 rounded-xl">
        {data.slice(2, 3).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>
      <div className="row-span-5 col-start-5 bg-slate-500 rounded-xl">
        {data.slice(3, 4).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>
      <div className="col-span-2 row-span-2 col-start-3 bg-slate-500 rounded-xl row-start-4">
        {data.slice(4, 5).map((item) => (
          <img
            key={item.id}
            className="w-full h-full object-cover"
            src={item.url}
            alt="image"
          />
        ))}
      </div>
    </>
  );
};

GaleriComponent.propTypes = {
  data: PropTypes.array,
};

export default GaleriComponent;
