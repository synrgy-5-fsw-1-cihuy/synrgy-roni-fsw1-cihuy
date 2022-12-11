export interface ICar {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  availableAt: Date;
  available: boolean;
  driverType?: number;
  type: string;
  year: string;
  options: Array<string>;
  specs: Array<string>;
}

interface IFilter {
  driverType?: number;
  date?: string;
  time?: string;
  passenger?: number;
}

const getUnix = (unix: Date) => new Date(unix).getTime() / 1000;

const combineTime = (date: string, time: string) => {
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  return (
    new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute)
    ).getTime() / 1000
  );
};

const filterCar = (
  { driverType, date, time = "00:00", passenger = 1 }: IFilter,
  cars: ICar[]
): Promise<ICar[]> => {
  const dateTime =
    date && time ? combineTime(date, time) : date ? Date.parse(date) / 1000 : 0;

  return new Promise(function (resolve, reject) {
    const result = cars.filter(
      (car) =>
        (!driverType || car.driverType === Number(driverType)) &&
        (!dateTime || getUnix(car.availableAt) > dateTime) &&
        (!passenger || car.capacity >= Number(passenger))
    );

    if (!result.length) reject("No car found");

    resolve(result);
  });
};

export { filterCar };
