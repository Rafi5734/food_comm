import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Card from "react-bootstrap/Card";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loading from "../../../../Components/Shared/Loading/Loading";
import auth from "../../../../firebase.init";
import CheckoutForm from "../../CheckoutForm/CheckoutForm";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const stripePromise = loadStripe(
  "pk_test_51LjQDsIuMYzXtkmkPWiH8MIT8tMlHG55vpMv5QaXhcfHkIY4eizKa4r6CYgaKe3SY2g0vMfFREqLqhOutCTY1WvZ00R5WjrT5n"
);

const PaymentAll = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const { id } = useParams();
  const url = `http://localhost:5000/order`;

  const { data: singleOrder, isLoading } = useQuery(["order"], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const totalSum = singleOrder.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );
  const handlePaymentDone = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your payment successfully done",
      showConfirmButton: false,
      timer: 1000,
    });
    localStorage.setItem("payment_status", "paid");
    navigate("/dashboard");
    // singleOrder?.map((status) => console.log(status?.status));
  };
  console.log(totalSum);
  return (
    <div>
      <Card className="mt-5 mb-3 w-50 mx-auto">
        <Card.Body>
          <Card.Title style={{ textTransform: "uppercase" }}>
            Hello,{" "}
            <span style={{ color: "#e64088", fontWeight: "bolder" }}>
              {user?.displayName}
            </span>
          </Card.Title>
          <Card.Title>
            Pay for{" "}
            {singleOrder?.map((item) => (
              <span className="text-success">{item?.service} </span>
            ))}
          </Card.Title>
          <Card.Text className="fw-bold">Please pay: {totalSum} BDT</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-5  w-50 mx-auto">
        <Card.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Phone number"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Form.Select
            className="mt-3 mb-3"
            aria-label="Default select example"
          >
            <option>Select a category</option>
            <option value="home_delivery">Home Delivery</option>
            <option value="office_delivery">Office Delivery</option>
            {/* <option value="3">Three</option> */}
          </Form.Select>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Card number"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Form.Control
              placeholder="CVC number"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Button
            variant="outline-danger"
            onClick={handlePaymentDone}
            id="button-addon1"
          >
            Pay Bill
          </Button>
          {/* <Elements stripe={stripePromise}>
            <CheckoutForm singleOrder={singleOrder} />
          </Elements> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaymentAll;
