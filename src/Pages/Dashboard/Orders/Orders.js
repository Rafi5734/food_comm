import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Card, Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
// import {  } from "bootstrap";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const retrievedPaymentData = localStorage.getItem("payment_status");

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          // console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          // console.log("data", data);
          const myOrders = data.filter(
            (singleData) => singleData.email === user.email
          );
          setOrders(myOrders);
        });
    }
  }, [user]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are Sure To Cancel This Order?");
    if (proceed) {
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Order Deleted SuccessFully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1>My Orders [Total {orders.length}]</h1>
      <Row>
        {orders?.map((order) => (
          <Col
            key={order._id}
            order={order}
            className="my-3 text-center"
            sm={12}
            md={6}
            lg={4}
          >
            <Card
              data-aos="zoom-in"
              style={{ height: "97%" }}
              className="mx-1 mb-3  shadow"
            >
              <div className="text-center">
                <Card.Img
                  style={{ width: "90%", height: "200px" }}
                  variant="top"
                  src={order.image}
                />
              </div>
              <Card.Body>
                <Card.Title
                  style={{ color: "#42a5f5", fontSize: "15px" }}
                  className="text-uppercase"
                >
                  {order.service}
                </Card.Title>
                <h6 className="btn-danger mx-5 rounded-3">{order.status}</h6>
                <Card.Text>Price: {order.price}.00 BDT</Card.Text>
                <InputGroup className="mb-3">
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
                {order.date && <Card.Title>Date: {order.date}</Card.Title>}
                {retrievedPaymentData === "paid" ? (
                  <></>
                ) : (
                  <>
                    {!order.paid && (
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => handleDeleteOrder(order._id)}
                      >
                        Cancel Order
                      </button>
                    )}
                  </>
                )}

                {retrievedPaymentData === "paid" ? (
                  <>
                    <Button disabled className="btn btn-danger">
                      Paid
                    </Button>
                  </>
                ) : (
                  <>
                    {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-danger">Pay</button>
                      </Link>
                    )}
                    {order.price && order.paid && (
                      <Button disabled className="btn btn-danger">
                        Paid
                      </Button>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
            {/* {order.price && !order.paid && (
              <Link to={`/dashboard/payment/${order._id}`}>
                <button className="btn btn-danger">Pay</button>
              </Link>
            )}
            {order.price && order.paid && (
              <span className="btn btn-danger">Paid</span>
            )} */}
          </Col>
        ))}
        {retrievedPaymentData === "paid" ? (
          <>
            <Button disabled className="btn btn-danger">
              Paid
            </Button>
          </>
        ) : (
          <>
            <Link to="/paymentall">
              <Button className="btn btn-danger">Pay Bill</Button>
            </Link>
          </>
        )}
      </Row>
    </div>
  );
};

export default Orders;
