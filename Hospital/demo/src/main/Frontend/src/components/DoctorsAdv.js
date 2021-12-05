import { Carousel } from "react-bootstrap";
import {Container, Card } from "react-bootstrap";
import "./Navbar.css";
function DoctorsAdv() {
  return (
    <div>
      <div className="flex">
        OUR <span> DOCTORS</span>
      </div>
      <Carousel>
        <Carousel.Item>
          <Card.Body>
            <Container>
              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <img
                    className="d-block w-60"
                    src="https://i.pinimg.com/564x/c8/ef/a7/c8efa735091baf0c6cbe32530352313c.jpg"
                    height="200px"
                    width="400px"
                  />
                </div>
                <div className="col-5">
                  <div>
                    <h1 className=" text-black-90"> Dr. haron Hind</h1>
                  </div>
                  <p>
                    Ophthalmologist | Successfully performed on more than 500
                    patients
                    <br />
                    Dr. Bowen Chan has more than 15 years of experience
                    <br />
                  </p>
                </div>
              </div>
            </Container>
          </Card.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Card.Body>
            <Container>
              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <img
                    className="d-block w-60"
                    src="https://i.pinimg.com/564x/1b/52/fd/1b52fd81c2282b432b85dc6a8a01f13d.jpg"
                    height="200px"
                    width="400px"
                  />
                </div>
                <div className="col-5">
                  <div>
                    <h1 className=" text-black-90"> Dr. Sheej Mathai</h1>
                  </div>
                  <p>
                    A pediatrician/doctor is a medical practitioner who works,
                    <br />
                    directly with children. Also known as pediatricians.
                    <br />
                    Dr. Sheej Mathai has more than 5 years of experience
                  </p>
                </div>
              </div>
            </Container>
          </Card.Body>
        </Carousel.Item>
        <Carousel.Item>
          <Card.Body>
            <Container>
              <div className="row d-flex justify-content-center">
                <div className="col-5">
                  <img
                    className="d-block w-60"
                    src="https://i.pinimg.com/564x/46/6b/ae/466baed3d314a9ee50f351eb73e937cc.jpg"
                    height="200px"
                    width="400px"
                  />
                </div>
                <div className="col-5">
                  <div>
                    <h1 className=" text-black-90"> Dr. leon mcdougle</h1>
                  </div>
                  <p>
                    Dentist specialized in senior dentistry, dental implants,
                    <br />
                    gum treatment, oral diseases, endodontics and endodontics
                    <br />
                    Dr. leon mcdougle has more than 8 years of experience
                  </p>
                </div>
              </div>
            </Container>
          </Card.Body>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DoctorsAdv;
