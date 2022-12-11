import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-3">
      <div className="container px-3">
        <div className="row row-cols-md-2 row-cols-1 gx-4">
          <div className="align-self-start text-md-start text-center">
            <h2 className="fs-2 fw-bold mb-3">Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <Accordion flush>
            <Accordion.Item eventKey="0" bsPrefix="faq-item">
              <Accordion.Header>
                Apa saja syarat yang dibutuhkan?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                excepturi quo laboriosam iure distinctio? Iure illo minima,
                ratione natus cumque non saepe. Veniam rem minus cupiditate
                dolore sed magnam libero?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" bsPrefix="faq-item">
              <Accordion.Header>
                Berapa hari minimal sewa mobil lepas kunci?
              </Accordion.Header>
              <Accordion.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                itaque perferendis et necessitatibus? Numquam voluptate,
                suscipit perspiciatis, laborum sint delectus similique
                asperiores atque error hic nisi reiciendis iusto modi quibusdam!
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" bsPrefix="faq-item">
              <Accordion.Header>
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, deserunt tenetur quaerat at iure perspiciatis, voluptate
                magni fugiat recusandae ea dignissimos optio perferendis velit
                itaque! Sunt inventore exercitationem explicabo quam?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" bsPrefix="faq-item">
              <Accordion.Header>
                Apakah Ada biaya antar-jemput?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                quibusdam molestiae cum eos ad accusantium ab asperiores, vel
                quasi. Labore deserunt sapiente iste aliquid quam, voluptatem in
                eveniet provident natus?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" bsPrefix="faq-item">
              <Accordion.Header>
                Bagaimana jika terjadi kecelakaan?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                nihil delectus facere harum voluptas aut, aspernatur dolore odit
                nobis pariatur. Neque illo eveniet sequi veritatis nam
                repellendus ex natus in?
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
