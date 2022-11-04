/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);

// Custom
const combineTime = (date, time) => {
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  return new Date(year, month - 1, day, hour, minute).getTime() / 1000;
};

const getUnix = (unix) => new Date(unix).getTime() / 1000;

const getTime = (unix, type) => {
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

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init();

const searchForm = document.getElementById("search");
const clearButton = document.getElementById("clear");

searchForm.addEventListener("submit", (event) => {
  app.submit(event);
});

clearButton.addEventListener("click", () => {
  app.reset();
});
