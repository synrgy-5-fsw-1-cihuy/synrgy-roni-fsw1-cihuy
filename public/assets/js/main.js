/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
console.log(params);
/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init().then(app.run);

// Custom
const cars = JSON.parse(localStorage.getItem("CARS"));

const searchForm = document.getElementById("search");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target[0].value);
  console.log(event.target[1].value);
  console.log(event.target[2].value);
  console.log(event.target[3].value);
});
