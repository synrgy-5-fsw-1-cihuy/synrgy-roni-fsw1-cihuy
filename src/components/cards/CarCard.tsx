import {
  FiCalendar,
  FiCircle,
  FiSettings,
  FiUserCheck,
  FiUserX,
} from "react-icons/fi";

import { ICar } from "../../utils/filter";

interface ICarCard {
  data: ICar;
}

const CarCard = ({ data }: ICarCard) => {
  return (
    <div>
      <div
        className="p-2 border-0 shadow-sm card flex-fill"
        style={{ height: "100%" }}
      >
        <div className="p-2 img-container">
          <img
            src={data.image}
            alt={data.manufacture + " " + data.model}
            className="rounded card-img-top img-center"
          />
        </div>
        <div className="card-body d-flex flex-column gy-3">
          <p>
            {data.manufacture}/{data.model}
          </p>
          <h5>
            <b>
              {data.rentPerDay.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}{" "}
              / hari
            </b>
          </h5>
          <p>{data.description}</p>
          <p className="d-inline-flex">
            {data.driverType === 1 ? (
              <>
                <FiUserCheck className="me-2" /> <span>Dengan Sopir</span>
              </>
            ) : (
              <>
                <FiUserX className="me-2" />{" "}
                <span>Tanpa Sopir (Lepas Kunci)</span>
              </>
            )}
          </p>
          <p className="d-inline-flex">
            <FiCircle className="me-2" />
            {data.capacity} orang
          </p>
          <p className="d-inline-flex">
            <FiSettings className="me-2" />
            {data.transmission}
          </p>
          <p className="d-inline-flex">
            <FiCalendar className="me-2" />
            {data.year}
          </p>
          <p>Tersedia: {new Date(data.availableAt).toLocaleString()}</p>
          <button
            type="button"
            className="px-3 py-2 mt-auto mb-0 text-white btn btn-lgreen-400 fw-bold"
          >
            Pilih Mobil
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
