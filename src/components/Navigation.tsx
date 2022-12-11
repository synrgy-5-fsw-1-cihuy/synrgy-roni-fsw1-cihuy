import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

interface INavigation {
  className?: string;
}

const Navigation: FC<INavigation> = ({ className }) => {
  return (
    <ul
      className={clsx("navbar-nav px-3 ms-lg-auto me-auto me-lg-0", className)}
    >
      <li className="px-1 nav-item px-sm-3">
        <a className="text-black nav-link" href="#service">
          Our Services
        </a>
      </li>
      <li className="px-1 nav-item px-sm-3">
        <a className="text-black nav-link" href="#why-us">
          Why Us
        </a>
      </li>
      <li className="px-1 nav-item px-sm-3">
        <a className="text-black nav-link" href="#testimonials">
          Testimonial
        </a>
      </li>
      <li className="px-1 nav-item px-sm-3">
        <a className="text-black nav-link" href="#faq">
          FAQ
        </a>
      </li>
      <li className="buton ps-sm-3 ps-1">
        <Link
          className="mt-3 text-white btn btn-lgreen-400 fw-bold mt-lg-0"
          to="/register"
        >
          Register
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
