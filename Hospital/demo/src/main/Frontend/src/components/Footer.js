import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex"></div>
      <div className="text-center text-lg-start bg-light text-muteds footer">
        {/* Footer */}
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#343434" }}
        >
          {/* Section: Social media */}
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "#139279" }}
          >
            {/* Left */}
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            {/* Right */}
            <div>
              <a href className="text-white me-4">
                <FacebookIcon />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-twitter" />
              </a>
              <a href className="text-white me-4">
                <TwitterIcon />
              </a>
              <a href className="text-white me-4">
                <InstagramIcon />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">About us </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "gray",
                      height: "2px",
                    }}
                  />
                  <p className="text-white">
                   The well being and health of each and every person is very precious and should be guarded and protected.
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Our Service</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "gray",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href className="text-white">
                      Pediatres
                    </a>
                  </p>
                  <p>
                    <a href className="text-white">
                      Radiology
                    </a>
                  </p>
                  <p>
                    <a href className="text-white">
                      Ophthalmology
                    </a>
                  </p>
                  <p>
                    <a href className="text-white">
                    Dental
                    </a>
                  </p>
                  <p>
                    <a href className="text-white">
                    Family Medicine
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "gray",
                      height: "2px",
                    }}
                  />
                  <p className="text-white">
                    <i className="fas fa-home mr-3" /> KSA, Riyadh, Riyadh
                  </p>
                  <p className="text-white">
                    <i className="fas fa-envelope mr-3" /> info@example.com
                  </p>
                  <p className="text-white">
                    <i className="fas fa-phone mr-3" /> + 011 200 00 00
                  </p>
                  <p className="text-white">
                    <i className="fas fa-print mr-3" /> + 011 222 00 00
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2021 Copyright
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
