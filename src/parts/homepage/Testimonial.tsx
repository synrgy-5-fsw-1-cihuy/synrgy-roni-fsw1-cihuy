import { FC } from "react";

import TestimonialCard from "../../components/cards/TestimonialCard";
import LeftIcon from "../../components/icons/LeftIcon";
import RightIcon from "../../components/icons/RightIcon";

const Testimonial: FC = () => {
  return (
    <section id="testimonials" className="py-2 my-5">
      <div className="my-5 text-center">
        <h2 className="fs-2 fw-bold">Testimonial</h2>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div
        id="wrapper-testimonials"
        className="flex-row d-flex justify-content-start wrap-testimonials"
      >
        <TestimonialCard
          key={0 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo"
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={1 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo"
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={2 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo"
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={3 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo"
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={4 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo"
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
        <TestimonialCard
          key={5 + "Testimonial"}
          stars={[1, 2, 3, 4, 5]}
          image="./assets/img/profiles/img_photo2.png"
          profile="John Doe 32, Bromo"
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”{" "}
        </TestimonialCard>
      </div>
      <div className="flex-row mt-2 d-flex justify-content-center">
        <button
          id="slide-left"
          className="p-1 mx-2 border border-black btn btn-slider rounded-circle"
        >
          <LeftIcon />
        </button>
        <button
          id="slide-right"
          className="p-1 mx-2 border border-black btn btn-slider rounded-circle"
        >
          <RightIcon />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
