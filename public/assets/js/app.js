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
    if (!withDriver && !dateTime && !passenger) return this.run();
    if (typeof withDriver !== "undefined")
      this.driverTypeElement.value = withDriver;
    if (typeof dateTime !== "undefined")
      this.dateElement.value = getTime(dateTime, "date");
    if (typeof dateTime !== "undefined")
      this.timeElement.value = getTime(dateTime, "hour");
    if (typeof passenger !== "undefined")
      this.passengerElement.value = passenger;

    this.filter(
      (car) =>
        getUnix(car.availableAt) < dateTime &&
        car.capacity >= parseInt(passenger)
    );
  }

  run = () => {
    console.log(Car.list);
    const requiredClass =
      this.carContainerElement.classList.contains("row-cols-md-3");

    if (Car.list.length > 0) {
      Car.list.forEach((car) => {
        if (!requiredClass)
          this.carContainerElement.classList.add("row-cols-md-3");
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
      return;
    }

    console.log("No car available");

    if (requiredClass)
      this.carContainerElement.classList.remove("row-cols-md-3");
    this.carContainerElement.appendChild(this.render());
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

    const date = event.target[1].value;
    const time = event.target[2].value;

    const driverType = event.target[0].value;
    const dateTime = combineTime(date, time);
    const passenger = event.target[3].value || 0;

    const current = new URL(window.location.href);
    current.searchParams.set("withDriver", driverType);
    current.searchParams.set("dateTime", dateTime);
    current.searchParams.set("passenger", passenger);

    window.history.pushState(null, null, current);

    this.filter(
      (car) =>
        getUnix(car.availableAt) < dateTime &&
        car.capacity >= parseInt(passenger)
    );
  };

  reset = async () => {
    const current = new URL(window.location.href);
    window.history.pushState(null, null, current.origin + current.pathname);

    this.driverTypeElement.value = "";
    this.dateElement.value = "";
    this.timeElement.value = "";
    this.passengerElement.value = "";

    this.clear();
    await this.load();
    this.run();
  };

  filter = async (filterer) => {
    this.clear();
    const cars = await Binar.listCars(filterer);
    Car.init(cars);
    this.run();
  };

  render = () => {
    const node = document.createElement("div");
    node.className = "col-12 text-center";
    node.innerHTML = "Not Found";
    return node;
  };
}
