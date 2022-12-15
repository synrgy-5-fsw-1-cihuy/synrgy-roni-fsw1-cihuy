import { AxiosResponse } from "axios";
import { FormEvent, MutableRefObject, useEffect, useRef } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "../components/cards/CarCard";
import CarCardSkeleton from "../components/skeletons/CarCardSkeleton";
import Hero from "../parts/Hero";
import { getAllCar } from "../services/car.service";
import { RootState } from "../store";
import {
  getFilteredCars,
  resetFilter,
  setAllCar,
  setCarLoading,
  setFilterByCapacity,
  setFilterByDate,
  setFilterByDriverType,
  setFilterByTime,
} from "../store/reducers/car";
import { ICar } from "../utils/filter";
import { driverTypeOptions, timeOptions } from "../utils/options";

const CarsPage: FC = () => {
  const dispatch = useDispatch();

  const driverTypeE = useRef() as MutableRefObject<HTMLSelectElement>;
  const dateE = useRef() as MutableRefObject<HTMLInputElement>;
  const timeE = useRef() as MutableRefObject<HTMLSelectElement>;
  const passengerE = useRef() as MutableRefObject<HTMLInputElement>;

  const { isLoading } = useSelector((state: RootState) => state.car);
  const cars: ICar[] = useSelector(getFilteredCars);

  useEffect(() => {
    if (cars.length < 1) {
      getAllCar()
        .then((res: AxiosResponse) => {
          dispatch(setAllCar(res.data));
        })
        .catch(() => dispatch(setCarLoading(false)));
    }
  }, []);

  const handleFilter = async (e: FormEvent<Element>) => {
    e.preventDefault();
    dispatch(setFilterByDriverType(Number(driverTypeE?.current?.value)));
    dispatch(setFilterByDate(dateE?.current?.value));
    dispatch(setFilterByTime(timeE?.current?.value));
    dispatch(setFilterByCapacity(Number(passengerE?.current?.value)));
  };

  const handleReset = () => {
    driverTypeE.current.value = "";
    dateE.current.value = "";
    timeE.current.value = "";
    passengerE.current.value = "";
    dispatch(resetFilter());
  };

  return (
    <>
      <Hero />
      <section className="mb-5">
        <div id="finder" className="container">
          <div className="p-2 border border-white shadow card w-100">
            <div className="card-body">
              <form id="search" onSubmit={(e: FormEvent) => handleFilter(e)}>
                <div className="row row-cols-lg-5 row-cols-1 g-3">
                  <div>
                    <label htmlFor="driver-type" className="form-label">
                      Tipe Driver
                    </label>
                    <select
                      id="driver-type"
                      className="form-select trigger"
                      ref={driverTypeE}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pilih Tipe Driver
                      </option>
                      {driverTypeOptions.map((option) => (
                        <option key={option.text} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="form-label">
                      Tanggal
                    </label>
                    <input
                      id="date"
                      type="date"
                      ref={dateE}
                      className="form-control trigger"
                      placeholder="Pilih Tanggal"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="form-label">
                      Waktu Jemput/Ambil
                    </label>
                    <select
                      id="time"
                      ref={timeE}
                      className="form-select trigger"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pilih Waktu
                      </option>
                      {timeOptions.map((option) => (
                        <option key={option.text} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="passenger" className="form-label">
                      Penumpang
                    </label>
                    <input
                      id="passenger"
                      type="number"
                      ref={passengerE}
                      className="form-control trigger"
                      placeholder="Jumlah Penumpang"
                    />
                  </div>
                  <div className="d-flex align-items-end justify-content-around">
                    <button
                      id="clear"
                      type="button"
                      onClick={() => handleReset()}
                      className="px-3 py-2 text-white btn btn-danger fw-bold"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-2 text-white btn btn-lgreen-400 fw-bold"
                    >
                      Cari Mobil
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="container">
            {isLoading ? (
              <div
                id="cars-container"
                className="row row-cols-lg-3 row-cols-1 g-3"
              >
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <CarCardSkeleton key={`skeleton${i}`} />
                ))}
              </div>
            ) : cars.length > 0 ? (
              <div
                id="cars-container"
                className="row row-cols-lg-3 row-cols-1 g-3"
              >
                {cars.map((car) => (
                  <CarCard key={car.id} data={car} />
                ))}
              </div>
            ) : (
              <p className="w-full text-center col-12">
                <b>No Car Available</b>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CarsPage;
