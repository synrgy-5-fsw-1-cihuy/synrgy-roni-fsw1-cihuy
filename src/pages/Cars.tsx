import { FormEvent, MutableRefObject, useEffect, useState } from "react";
import { useRef } from "react";
import { FC } from "react";

import CarCard from "../components/cards/CarCard";
import CarCardSkeleton from "../components/skeletons/CarCardSkeleton";
import Hero from "../parts/Hero";
import { getAllCar } from "../services/car.service";
import { filterCar } from "../utils/filter";
import { ICar } from "../utils/filter";
import { driverTypeOptions, timeOptions } from "../utils/options";

const CarsPage: FC = () => {
  const driverTypeE = useRef() as MutableRefObject<HTMLSelectElement>;
  const dateE = useRef() as MutableRefObject<HTMLInputElement>;
  const timeE = useRef() as MutableRefObject<HTMLSelectElement>;
  const passengerE = useRef() as MutableRefObject<HTMLInputElement>;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cars, setCars] = useState<ICar[]>([]);
  const [filteredCars, setFilteredCars] = useState<ICar[]>([]);

  useEffect(() => {
    if (cars.length < 1) {
      getAllCar().then((res) => {
        setCars(res.data);
        setFilteredCars(res.data);
        setIsLoading(false);
      });
    }
  }, [cars, filteredCars]);

  const handleFilter = async (e: FormEvent<Element>) => {
    e.preventDefault();
    setIsLoading(true);
    const driverType = Number(driverTypeE?.current?.value);
    const date = dateE?.current?.value;
    const time = timeE?.current?.value;
    const passenger = passengerE?.current?.value as unknown as number;

    try {
      const result: ICar[] = await filterCar(
        { driverType, date, time, passenger },
        cars
      );
      setFilteredCars(result);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(true);
    }
  };

  const handleReset = () => {
    setFilteredCars(cars);
    driverTypeE.current.value = "";
    dateE.current.value = "";
    timeE.current.value = "";
    passengerE.current.value = "";
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
            ) : cars.length > 0 && filteredCars.length > 0 ? (
              <div
                id="cars-container"
                className="row row-cols-lg-3 row-cols-1 g-3"
              >
                {filteredCars.map((car) => (
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
