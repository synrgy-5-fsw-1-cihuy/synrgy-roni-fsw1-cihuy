class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card shadow-sm border-0 p-2 flex-fill"style="height: 100%;">
          <div class="p-2 img-container">
            <img src="${this.image}" alt="${
      this.manufacture
    }" class="card-img-top img-center rounded" />
          </div>
          <div class="card-body d-flex flex-column mt-3 gy-3">
            <p>${this.manufacture}/${this.model}</p>
            <h5><b>${this.rentPerDay.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
            })} / hari</b></h5>
            <p>${this.description}</p>
            <p><i class="feather-10" data-feather="circle"></i> ${
              this.capacity
            } orang</p>
            <p><i class="feather-10" data-feather="settings"></i> ${
              this.transmission
            }</p>
            <p><i class="feather-10" data-feather="calendar"></i> Tahun ${
              this.year
            }</p>
            <p>Tersedia: ${new Date(this.availableAt).toLocaleString()}</p>
            <button
              type="button"
              class="btn btn-lgreen-400 fw-bold py-2 px-3 text-white mt-auto mb-0">
              Pilih Mobil
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
