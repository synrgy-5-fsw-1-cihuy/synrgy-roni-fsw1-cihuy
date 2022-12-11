import { FC } from "react";
import { FiFacebook, FiInstagram, FiTwitch, FiTwitter } from "react-icons/fi";

const Footer: FC = () => {
  const socialMedias = [
    {
      name: "Facebook",
      icon: <FiFacebook />,
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
    },
    {
      name: "Twitch",
      icon: <FiTwitch />,
    },
  ];

  const navigation = [
    {
      name: "Our Services",
      link: "#service",
    },
    {
      name: "Why Us",
      link: "#why-us",
    },
    {
      name: "Testimonial",
      link: "#testimonials",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];
  return (
    <section id="footer" className="py-5 mt-5">
      <div className="container px-4">
        <div className="row row-cols-1 row-cols-lg-4 gy-3">
          <div className="d-flex flex-column">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="d-flex flex-column">
            <ul className="gap-2 list-group list-group-flush">
              {navigation.map((nav) => (
                <li className="d-inline-flex" key={nav.link}>
                  <a
                    href={nav.link}
                    className="mb-3 text-black text-decoration-none fw-normal"
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex flex-column">
            <p>Connect with us</p>
            <div className="flex-row d-flex">
              {socialMedias.map((social) => (
                <div
                  className="px-2 py-1 rounded-circle bg-dblue-400 me-1"
                  key={social.name}
                >
                  <a className="text-white" href={`#${social.name}`}>
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column">
            <p>Copyright Binar 2022</p>
            <img
              className="w-25"
              src="./assets/img/binar.svg"
              alt="Binar Rental Car"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
