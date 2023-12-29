import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#1c2331" }}>
      <div className="container mt-3">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#1c2331" }}
        >
          <section
            className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <div className="me-5">
              <span>সোস্যাল মিডিয়ায় আমাদের সাথে যুক্ত থাকুন:</span>
            </div>

            <div>
              <a href="https://www.facebook.com/" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.google.com/" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://www.instagram.com/" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">কম্পানির নাম</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <div className="footer-logo mt-5">
                    <div className="logo d-flex align-items-center">
                      <h3 className="text-danger">বাঙা</h3>
                      <h3 className="text-white">লিয়ানা</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">সার্ভিস</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <Link className="text-white" to="/allFoods">
                    <p>খাবার</p>
                  </Link>
                  <Link className="text-white" to="/allFoods">
                    <p>খাবার</p>
                  </Link>
                  <Link className="text-white" to="/allFoods">
                    <p>খাবার</p>
                  </Link>
                  <Link className="text-white" to="/allFoods">
                    <p>খাবার</p>
                  </Link>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">প্রয়োজনীয় লিংক </h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <Link className="text-white" to="/dashboard">
                    <p>ড্যাশবো্র্ড</p>
                  </Link>
                  <Link className="text-white" to="/aboutUs">
                    <p>আমাদের সম্পর্কে</p>
                  </Link>
                  <Link className="text-white" to="/privacyPolicy">
                    <p>প্রাইভেসি পলিসি</p>
                  </Link>
                  <Link className="text-white" to="/faq">
                    <p>প্রশ্ন উত্তর</p>
                  </Link>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">যোগাযোগ</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: " 60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> ঢাকা, বাংলাদেশ
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> bdfood@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 727 129 923
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 702 864 653
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Links  */}

          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © ২০২৩ বাঙালিয়ানা
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
