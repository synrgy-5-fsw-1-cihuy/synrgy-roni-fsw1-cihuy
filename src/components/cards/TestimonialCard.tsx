import { FC, ReactNode } from "react";

import StarIcon from "../icons/StarIcon";

interface ITestimonialCard {
  stars: number[];
  image: string;
  children: ReactNode;
  profile: string;
}

const TestimonialCard: FC<ITestimonialCard> = ({
  stars,
  image,
  children,
  profile,
}) => {
  return (
    <div className="card-testimonials">
      <div className="row align-items-center h-100">
        <div className="py-3 col-12 col-md-3 d-flex align-items-center">
          <img
            className="w-10 mx-auto rounded-circle d-block"
            src={image}
            alt={profile}
          />
        </div>
        <div className="col-12 col-md-9">
          <div className="d-flex flex-column align-items-md-start align-items-center">
            <div className="mb-2">
              {stars.map((star, index) => (
                <StarIcon key={star + index} />
              ))}
            </div>
            <p className="fw-light">{children}</p>
            <p className="fw-semibold">{profile}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
