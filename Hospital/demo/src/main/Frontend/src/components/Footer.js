import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
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
                    is e-commerce company. The company mainly focuses on women's
                    wear, but it also offers men's apparel, children's clothes,
                    accessories, shoes, bags and other fashion items.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "gray",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Men's Clothing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      women's Clothing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Jewelory
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Electronic
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "gray",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="#!" className="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Shipping company
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Help
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
                    <i className="fas fa-home mr-3" /> KSA, NY 10012, US
                  </p>
                  <p className="text-white">
                    <i className="fas fa-envelope mr-3" /> info@example.com
                  </p>
                  <p className="text-white">
                    <i className="fas fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  <p className="text-white">
                    <i className="fas fa-print mr-3" /> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
