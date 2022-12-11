import { FC, ReactNode } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

interface IOffCanvas {
  show: boolean;
  onClick: () => void;
  className: string;
  children: ReactNode;
}

const OffCanvas: FC<IOffCanvas> = ({ show, onClick, className, children }) => {
  return (
    <Offcanvas
      show={show}
      onHide={onClick}
      placement="end"
      backdrop
      scroll
      className={className}
      backdropClassName="backdrop d-flex d-lg-none"
      bsPrefix="collapse navbar-collapse offcanvas w-50 offcanvas-end py-2 d-flex d-lg-none"
    >
      <Offcanvas.Header closeButton className="w-100">
        <Offcanvas.Title className="mb-0 fw-bold">BCR</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body bsPrefix="w-100">{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvas;
