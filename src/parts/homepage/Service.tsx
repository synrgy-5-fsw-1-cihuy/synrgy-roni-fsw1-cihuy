import ChecklistIcon from "../../components/icons/ChecklistIcon";

const Service = () => {
  return (
    <section id="service" className="py-3 my-5">
      <div className="container px-3">
        <div className="row row-cols-md-2 row-cols-1 gy-4 gx-4">
          <div className="d-flex align-self-center justify-content-center">
            <img
              src="./assets/img/girl.png"
              className="w-75"
              alt="Service Girl"
            />
          </div>
          <div className="align-self-center">
            <h2 className="fs-2 fw-bold">
              Best Car Rental for any kind of trip in Pelaihari!
            </h2>
            <p className="mt-4">
              Sewa mobil di Pelaihari bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="list-group list-group-flush gap-3">
              <li className="d-inline-flex">
                <ChecklistIcon className="me-3" />
                <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
              </li>
              <li className="d-inline-flex">
                <ChecklistIcon className="me-3" />
                <span>Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
              </li>
              <li className="d-inline-flex">
                <ChecklistIcon className="me-3" />
                <span>Sewa Mobil Jangka Panjang Bulanan</span>
              </li>
              <li className="d-inline-flex">
                <ChecklistIcon className="me-3" />
                <span>Gratis Antar - Jemput Mobil di Bandara</span>
              </li>
              <li className="d-inline-flex">
                <ChecklistIcon className="me-3" />
                <span>Layanan Airport Transfer / Drop In Out</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
