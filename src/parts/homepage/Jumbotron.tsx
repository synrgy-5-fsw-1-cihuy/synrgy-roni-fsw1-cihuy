import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <section id="getting-started" className="py-5">
      <div className="container px-4">
        <div
          className="row cta-banner bg-dblue-400 text-center text-white p-4"
          style={{ minHeight: "326px" }}>
          <div className="align-self-center py-5">
            <h1 className="fs-1 fw-bold">Sewa Mobil di Pelaihari Sekarang</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              to="/cars"
              className="btn btn-lgreen-400 fw-bold text-white mt-4 py-2 px-3">
              Mulai Sewa Mobil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
