import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import "./Dashboard.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="container">
      <PageTitle title="Dashboard"></PageTitle>
      <div className="row">
        <div className="col-md-2 pt-2 my-auto shadow-lg">
          {admin ? (
            <ul>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  হোম
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/users"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  সকল ইউজার
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/addItem"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  এড ফুড
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/manageItems"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ম্যানেজ ফুড
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/manageOrders"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  ম্যানেজ অর্ডার
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/allTransaction"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  সকল লেনদেন
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  হোম
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/addReview"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  রিভিউ দিন
                </Link>
              </li>
              <li className="me-3 my-2 rounded-3 btn-dark">
                <Link
                  to="/dashboard/myOrders"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  আমার অর্ডার
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="col-md-10 my-auto ">
          <h1 className="fw-bolder shadow-sm">Dashboard</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
