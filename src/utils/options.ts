interface IDriverType {
  text: string;
  value: number;
}

interface ITime {
  text: string;
  value: string;
}

const driverTypeOptions: IDriverType[] = [
  {
    text: "Dengan Sopir",
    value: 1,
  },
  {
    text: "Tanpa Sopir (Lepas Kunci)",
    value: 2,
  },
];

const timeOptions: ITime[] = [];

for (let i = 0; i < 24; i++) {
  const time = {
    text: i.toString().length === 1 ? `0${i}:00 WIB` : `${i}:00 WIB`,
    value: i.toString().length === 1 ? `0${i}:00` : `${i}:00`,
  };
  timeOptions.push(time);
}

export { driverTypeOptions, timeOptions };
