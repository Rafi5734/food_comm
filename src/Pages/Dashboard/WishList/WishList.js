import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin/useAdmin";
import "./Dashboard.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const WishList = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="container">
      <PageTitle title="Wish List"></PageTitle>
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
        <div className="col-md-10 my-auto shadow-sm">
          <h1 className="fw-bolder">Wish List</h1>
          <p>
            Total Wish List Items:{" "}
            <span className="fw-bold fs-4" style={{ color: "#9b5de5" }}>
              20
            </span>
          </p>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>প্রথাগত কারি প্ল্যাটার</td>
                <td>400</td>
                <td className="w-25">
                  <InputGroup>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      id="button-addon1"
                    >
                      <svg
                        width="14px"
                        height="14px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M4 12H20M12 4V20"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </Button>
                    <Form.Control
                      type="number"
                      defaultValue={1}
                      aria-label="Dollar amount (with dot and two decimal places)"
                    />
                    <Button
                      size="sm"
                      variant="outline-secondary"
                      id="button-addon1"
                    >
                      <svg
                        width="14px"
                        height="14px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M6 12L18 12"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                    </Button>
                  </InputGroup>
                </td>
                <td>
                  <Button size="sm" variant="primary">
                    <svg
                      width="14px"
                      height="14px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#ffffff"
                          d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
                        ></path>
                      </g>
                    </svg>
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th></th>
                <th className="fw-bold">Total Price</th>
                <th className="fw-bold">
                  =<span> 2000</span>
                </th>
                <th>
                  <Button size="sm" variant="primary">
                    Order Now
                  </Button>{" "}
                </th>
              </tr>
            </thead>
          </Table>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default WishList;
