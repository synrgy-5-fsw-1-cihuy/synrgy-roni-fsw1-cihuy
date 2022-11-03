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
    const { dateTime, withDriver, passenger } = params;
    if (!withDriver && !dateTime && !passenger) {
      this.run;
      return;
    }
    if (typeof withDriver !== "undefined")
      this.driverTypeElement.value = withDriver;
    if (typeof dateTime !== "undefined")
      this.dateElement.value = getHour(dateTime, "date");
    if (typeof dateTime !== "undefined")
      this.timeElement.value = getHour(dateTime, "hour");
    if (typeof passenger !== "undefined")
      this.passengerElement.value = passenger;

    this.filter(
      (car) =>
        getUnix(car.availableAt) < dateTime &&
        car.capacity >= parseInt(passenger)
    );
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

  submit = (event) => {
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
  };

  reset = () => {
    this.driverTypeElement.value = "";
    this.dateElement.value = "";
    this.timeElement.value = "";
    this.passengerElement.value = "";
  };

  filter = async (filterer) => {
    this.clear();
    const cars = await Binar.listCars(filterer);
    console.log(cars);
    Car.init(cars);
  };
}
