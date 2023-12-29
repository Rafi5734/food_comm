import React from "react";
import { Link } from "react-router-dom";
import imageUrl from "../../images/food-banner.png";
import PageTitle from "../Shared/PageTitle/PageTitle";
import "./Banner.css";
const Banner = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="w-100"
    >
      <PageTitle title="Home"></PageTitle>
      <div
        className="position-absolute text-white d-flex align-items-center justify-content-center"
        style={{
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          backgroundColor: "#1c2331",
          // i want to change the backgroundColor into more deep color
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-5 mt-5">
              <span style={{ color: "#bbb" }} className="text-uppercase">
                হ্যালো...
              </span>
              <h1 className="mb-4 mt-2 display-4 font-weight-bold">লুফে নিন</h1>
              <h1 className="mb-4 mt-2 display-5 font-weight-bold">
                <span style={{ color: "#9B5DE5" }}>আমাদের সেরা খাবার</span>
              </h1>
              <p style={{ color: "#bbb" }}>
                আমরা শহরের যে কোন জায়গায় খাবার পৌছে দেই।
              </p>
              <div className="mt-5">
                <Link
                  to="/services"
                  className="btn px-5 py-3 text-white mt-3 mt-sm-0"
                  style={{ borderRadius: "30px", backgroundColor: "#9B5DE5" }}
                >
                  সার্ভিস সমূহ
                </Link>
              </div>
            </div>

            <div className="col-md-6 pt-3">
              <img className="img-fluid" src={imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
