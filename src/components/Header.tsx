import { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Header: FC = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Profile", href: "/profile" },
  ];

  return (
    <header className="w-full py-4 bg-white">
      <nav className="container-custom">
        <div className="flex flex-row items-center justify-between w-full text-sm">
          <Logo />
          <ul className="items-center justify-between hidden space-x-2 text-xs md:flex md:space-x-2 md:text-sm xl:space-x-3 xl:text-base">
            {navigation.map((item, index) => (
              <li key={index + item.name}>
                <Link to={item.href}>
                  <a className="p-1 transition-all rounded hover:bg-gray-200 sm:px-3 sm:py-2 md:inline-block">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
