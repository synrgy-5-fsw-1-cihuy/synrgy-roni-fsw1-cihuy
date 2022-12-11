import { useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import OffCanvas from "./OffCanvas";

const Navbar: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <header>
      <nav id="navbar" className="py-3 navbar navbar-expand-lg bg-gray">
        <div className="container">
          <Link className="navbar-brand ms-0" to="/">
            <img src="./assets/img/binar.svg" alt="Binar Rental Car" />
          </Link>
          <button
            className="px-0 border-0 shadow-none navbar-toggler"
            type="button"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Navigation className="d-none d-lg-flex" />
          <OffCanvas
            show={show}
            onClick={() => setShow(false)}
            className="d-flex d-lg-none"
          >
            <Navigation />
          </OffCanvas>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
