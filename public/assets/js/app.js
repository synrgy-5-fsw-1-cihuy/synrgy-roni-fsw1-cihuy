class App {
  constructor() {
    this.driverTypeElement = document.getElementById("driver-type");
    this.dateElement = document.getElementById("date");
    this.timeElement = document.getElementById("time");
    this.passengerElement = document.getElementById("passenger");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;
    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };

  reset = () => {
    this.driverTypeElement.value = "";
    this.dateElement.value = "";
    this.timeElement.value = "";
    this.passengerElement.value = "";
  };

  filter = async (filterer) => {
    const cars = await Binar.listCars(filterer);
    console.log(cars);
    Car.init(cars);
  };
}
