import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import auth from "../../../firebase.init";
import useCourseDetails from "../../../hooks/useItemDetails/useItemDetails";
import "./CheckOut.css";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [course] = useCourseDetails(serviceId);
  const [user] = useAuthState(auth);
  const [deliveryType, setDeliveryType] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  if (user) {
    // console.log(user);
  }

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };
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
      phone: event.target.phone.value,
      address: event.target.address.value,
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
        event.target.reset();
        navigate("/dashboard/myOrders");
      }
      // console.log(res);
    });
  };

  console.log("order", handlePlaceOrder);

  return (
    <Container className="w-50 mx-auto">
      <PageTitle title="CheckOut"></PageTitle>
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Place Your Order</h3>
              <p>Fill in the data below.</p>
              <form onSubmit={handlePlaceOrder}>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={user.displayName}
                  required
                  readOnly
                />

                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={user.email}
                  placeholder="E-mail"
                  required
                  readOnly
                />
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={course.name}
                  required
                  readOnly
                />
                <input
                  className="form-control"
                  type="number"
                  name="phone"
                  autoComplete="off"
                  required
                  placeholder="01xxxxxxxxx"
                />
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  required
                  placeholder="Address..."
                />
                <select
                  className="form-control mt-3"
                  value={deliveryType}
                  onChange={(e) => setDeliveryType(e.target.value)}
                >
                  <option selected disabled>
                    Select Delivery Type:
                  </option>
                  <option>home-delivery</option>
                  <option>office-delivery</option>
                </select>
                {deliveryType === "office-delivery" && (
                  <>
                    <input
                      className="form-control"
                      type="text"
                      name="receiverName"
                      placeholder="Receiver Name"
                      value={receiverName}
                      onChange={(e) => setReceiverName(e.target.value)}
                      required
                    />
                    <input
                      className="form-control"
                      type="number"
                      name="receiverPhoneNumber"
                      placeholder="Receiver Phone Number"
                      value={receiverPhoneNumber}
                      onChange={(e) => setReceiverPhoneNumber(e.target.value)}
                      required
                    />
                  </>
                )}
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  required
                  placeholder="Quantity"
                />
                <h6 className="form-control mt-3">
                  Total Price: {totalPrice} taka
                </h6>
                <input
                  id="submit"
                  className="btn-danger fw-bold mt-3 w-50"
                  value="Place Order"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
