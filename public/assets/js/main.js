/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init().then(app.run);

// Coba olah data ini hehe :)
// console.log(params);

const driverTypeElement = document.getElementById("driver-type");
const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");
const passengerElement = document.getElementById("passenger");

const combineTime = (date, time) => {
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  return new Date(year, month - 1, day, hour, minute).getTime() / 1000;
};

const getUnix = (unix) => new Date(unix).getTime() / 1000;

const getHour = (unix, type) => {
  const time = new Date(unix * 1000);
  switch (type) {
    case "hour":
      const hour = time.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return hour;

    default:
      const date = time.toLocaleDateString("fr-CA");
      return date;
  }
};

const main = async () => {
  const { dateTime, withDriver, passenger } = params;
  if (!withDriver && !dateTime && !passenger) {
    app.run;
    return;
  }

  if (typeof withDriver !== "undefined") driverTypeElement.value = withDriver;
  if (typeof dateTime !== "undefined")
    dateElement.value = getHour(dateTime, "date");
  if (typeof dateTime !== "undefined")
    timeElement.value = getHour(dateTime, "hour");
  if (typeof passenger !== "undefined") passengerElement.value = passenger;

  app.clear();
  app.filter(
    (car) =>
      getUnix(car.availableAt) < dateTime && car.capacity >= parseInt(passenger)
  );
};

// Custom
const cars = JSON.parse(localStorage.getItem("CARS"));

const searchForm = document.getElementById("search");
const clearButton = document.getElementById("clear");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const driverType = event.target[0].value;
  const date = event.target[1].value;
  const time = event.target[2].value;
  const passenger = event.target[3].value || 0;
  const dateTime = combineTime(date, time);
  const current = new URL(window.location.href);
  current.searchParams.set("withDriver", driverType);
  current.searchParams.set("dateTime", dateTime);
  current.searchParams.set("passenger", passenger);
  window.location.href = current;
});

clearButton.addEventListener("click", () => {
  app.reset();
});

main();
