import "styles/loader.scss";

const Loader = () => {
  return (
    <div className="loader">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="list" key={i}>
            <div className="loading-placeholder" />
          </div>
        ))}
    </div>
  );
};

export default Loader;
