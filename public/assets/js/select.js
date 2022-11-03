const selectTimeElement = document.getElementById("time");
const selectDriverTypeElement = document.getElementById("driver-type");
const timeOptions = [];
const driverTypeOptions = [
  {
    text: "Dengan Sopir",
    value: "true",
  },
  {
    text: "Tanpa Sopir (Lepas Kunci)",
    value: "false",
  },
];

for (let i = 0; i < 24; i++) {
  let time = {
    text: i.toString().length === 1 ? `0${i}:00 WIB` : `${i}:00 WIB`,
    value: i.toString().length === 1 ? `0${i}:00` : `${i}:00`,
  };
  timeOptions.push(time);
}
for (let option of timeOptions) {
  let optionElement = document.createElement("option");
  optionElement.text = option.text;
  optionElement.value = option.value;
  selectTimeElement.appendChild(optionElement);
}

for (let option of driverTypeOptions) {
  let optionElement = document.createElement("option");
  optionElement.text = option.text;
  optionElement.value = option.value;
  selectDriverTypeElement.appendChild(optionElement);
}
