import React from "react";

const CarCardSkeleton = () => {
  return (
    <div>
      <div
        className="card shadow-sm border-0 p-2 flex-fill"
        style={{ height: "100%" }}>
        <div className="p-2 img-container placeholder-glow">
          <div className="card-img-top img-center placeholder rounded-1" />
        </div>
        <div className="card-body d-flex flex-column mt-3">
          <p className="placeholder-glow">
            <span className="placeholder col-3 rounded-1"></span>
          </p>
          <h5 className="card-title placeholder-glow">
            <b>
              <span className="placeholder col-6 rounded-1"></span>
            </b>
          </h5>
          <p className="placeholder-glow">
            <span className="placeholder col-7 rounded-1"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-3 rounded-1"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-3 rounded-1"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-7 rounded-1"></span>
          </p>
          <p className="placeholder-glow">
            <span className="placeholder col-12 py-3"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarCardSkeleton;
