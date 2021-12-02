import { Carousel } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import "./Departments.css";
function Departments() {
  return (
    <div>
      <div className="flex">
        <span>Hospital</span> Departments
      </div>

      <div className="container">
        <div className="row justify-content-around">
          <div className=" my-5 py-4 Sh-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top iamge-prodect "
              src="https://i.pinimg.com/736x/b0/8d/50/b08d504a91fdf98101a6937707f37ed6.jpg"
              alt="image item"
            />
            <div className="card-body text-center">
              <h4 className="card-title title-discription">Family Medicine</h4>
              <p className="lead">
                family medicine deals with the person as a whole, while
                incorporating social, physical, and psychological aspects.{" "}
              </p>

              <button type="button" className="btn">
                Book Now
                <span className="fas fa-chevron-right"></span>
              </button>
            </div>
          </div>

          <div className=" my-5 py-4 Sh-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top iamge-prodect "
              src="https://i.pinimg.com/564x/5f/00/cb/5f00cb7462dc4cce3e36b6e8a4b37463.jpg"
              alt="image item"
            />
            <div className="card-body text-center">
              <h4 className="card-title title-discription">Dental</h4>
              <p className="lead">
                Dentistry, is consists of the study, diagnosis, prevention, and
                treatment of diseases, disorders, and conditions of the oral
                cavity (the mouth),{" "}
              </p>

              <button type="button" className="btn">
                Book Now
                <span className="fas fa-chevron-right"></span>
              </button>
            </div>
          </div>
          <div className=" my-5 py-4 Sh-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top iamge-prodect "
              src="https://i.pinimg.com/564x/d1/09/2e/d1092e1209e4445427f6dbc63bb3913d.jpg"
              alt="image item"
            />
            <div className="card-body text-center">
              <h4 className="card-title title-discription">Ophthalmology</h4>
              <p className="lead">
                Ophthalmology is a branch of medicine and surgery that deals
                with the diagnosis and treatment of disorders of the eye.
              </p>

              <button type="button" className="btn">
                Book Now
                <span className="fas fa-chevron-right"></span>
              </button>
            </div>
          </div>
          <div className=" my-5 py-4 Sh-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top iamge-prodect "
              src="https://i.pinimg.com/564x/c6/69/c5/c669c5e8d827f2cbb26008db4e52a328.jpg"
              alt="image item"
            />
            <div className="card-body text-center">
              <h4 className="card-title title-discription">Radiology</h4>
              <p className="lead">
                Radiology is the medical discipline that uses medical imaging to
                diagnose and treat diseases within the bodies of humans.
              </p>

              <button type="button" className="btn">
                Book Now
                <span className="fas fa-chevron-right"></span>
              </button>
            </div>
          </div>
          <div className=" my-5 py-4 Sh-card" style={{ width: "18rem" }}>
            <img
              className="card-img-top iamge-prodect "
              src="https://i.pinimg.com/564x/be/22/53/be225315bd3c0f26b378257324c57f10.jpg"
              alt="image item"
            />
            <div className="card-body text-center">
              <h4 className="card-title title-discription">Pediatres</h4>
              <p className="lead">
                Paediatrics (also spelled pediatrics or pædiatrics) is the
                branch of medicine that involves the medical care of infants,
                children, and adolescents.{" "}
              </p>

              <button type="button" className="btn">
                Book Now
                <span className="fas fa-chevron-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
