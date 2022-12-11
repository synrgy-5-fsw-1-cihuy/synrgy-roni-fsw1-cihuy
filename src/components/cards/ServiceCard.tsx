import { FC, ReactNode } from "react";

interface IServiceCard {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const ServiceCard: FC<IServiceCard> = ({ title, icon, children }) => {
  return (
    <div className="col d-lg-flex align-items-md-stretch">
      <div className="p-2 card">
        <div className="card-body">
          {icon}
          <h5 className="my-3 fw-bold">{title}</h5>
          <p className="card-text fw-light">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
