import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from "react-rating";
import { Link, useParams, useNavigate } from "react-router-dom";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import useItemDetails from "../../../hooks/useItemDetails/useItemDetails";
import logo from "../../../images/pngwing.com.png";
import useCourseDetails from "../../../hooks/useItemDetails/useItemDetails";
import "./ItemDetails.css";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ItemDetails = () => {
  const { serviceId } = useParams();
  const [item] = useItemDetails(serviceId);
  const navigate = useNavigate();
  const [course] = useCourseDetails(serviceId);
  const [user] = useAuthState(auth);
  const [deliveryType, setDeliveryType] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");
  const [quantity, setQuantity] = useState(1);

  const totalPrice = course.price * quantity;

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: course.name,
      serviceId: serviceId,
      image: course.image,
      price: course.price,
      description: course.description,
      phone: event.target.phone?.value,
      address: event.target.address?.value,
      deliveryType: deliveryType,
      receiverName: receiverName,
      receiverPhoneNumber: receiverPhoneNumber,
      quantity: quantity,
      totalPrice: totalPrice,
      status: "Pending",
    };
    axios.post("http://localhost:5000/order", order).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        toast("Your Order is Booked");
        // event.target.reset();
        navigate("/dashboard/myOrders");
      }
      // console.log(res);
    });
  };

  return (
    <Container>
      <PageTitle title="Item Details"></PageTitle>
      <h1
        style={{
          textTransform: "uppercase",
          fontWeight: "bolder",
          fontSize: "35px",
        }}
      >
        {item.category}
      </h1>
      <Row className="text-start">
        <Col>
          <img
            className="img-fluid"
            alt=""
            src={item.image}
            style={{ height: "auto" }}
          />
          <Card style={{ width: "auto" }}>
            <Card.Title style={{ paddingTop: "20px", marginLeft: "5px" }}>
              ওনার সম্পর্কে:
            </Card.Title>
            <Row>
              <Col>
                <Card.Img
                  style={{
                    width: "100%",
                    marginTop: "80px",
                    marginLeft: "10px",
                  }}
                  src={logo}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Text className="fw-bold"></Card.Text>
                  <small style={{ color: "lightBlack" }}>
                    <i className="fas fa-map-marker-alt"></i> ঢাকা, বাংলাদেশ
                    <br />
                    ওনার একজন ভালো মানের রাধুনি। উনাদের খাবারের মান খুব ভালো।
                  </small>
                  <br />
                  <Card.Text style={{ fontWeight: "bold", color: "red" }}>
                    <small>
                      Reviews:{" "}
                      <Rating
                        className="text-warning"
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating="4.5"
                        readonly
                      />
                    </small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
              as="h4"
            >
              {item.name}
            </Card.Header>
            <h6 className="rating">
              <Rating
                className="text-warning pb-2 mt-2"
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating="4.5"
                readonly
              />{" "}
              <br />
              <small>based on 129 reviews</small>
            </h6>

            <hr />
            <Card.Body>
              <Card.Title>
                Price:
                {item.price} BDT
              </Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Title>What we provide?</Card.Title>
              <ul>
                <li>24 hours customer support</li>
                <li>Team of 4 peoples will work on your project</li>
                <li>Immediate solution to your problem </li>
                <li>Commitment to deliver your project on time</li>
              </ul>
              {/* <Link to={`/checkOut/${serviceId}`}>
                <Button className="me-2" variant="danger">
                  Order Now
                </Button>
              </Link> */}
              <Link to={`/dashboard/myOrders`}>
                <Button
                  onClick={handlePlaceOrder}
                  className="me-2"
                  variant="danger"
                >
                  Add to cart
                </Button>
              </Link>
              <Link to="/dashboard/addReview">
                <Button className="mt-2" variant="danger">
                  Add Review
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetails;
