import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SingleItem.css";
import axios from "axios";
import { toast } from "react-toastify";

const SingleItem = ({ singleItem }) => {
  const { _id, name, description, price, image } = singleItem;
  const [selectedItems, setSelectedItems] = useState([]);
  const [wishData, setWishData] = useState([]);
  let storeData = [];

  // console.log("singleItem", singleItem);
  const navigate = useNavigate();

  const navigateToItemDetails = (id) => {
    navigate(`/itemDetails/${id}`);
    // console.log(navigate);
  };

  const singleItemFood = (id) => {
    const url = `http://localhost:5000/food/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWishData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // useEffect(() => {

  // }, [wishData, storeData]);

  console.log(wishData);

  return (
    <Col className="my-3 text-center" sm={12} md={6} lg={4}>
      <Card
        data-aos="zoom-in"
        style={{ height: "97%" }}
        className="mx-1 mb-3  shadow"
      >
        <div className="text-center">
          <Card.Img
            className="mt-4"
            style={{ width: "80%", height: "200px" }}
            variant="top"
            src={image}
          />
        </div>
        <Card.Body>
          <Card.Title style={{ color: "#42a5f5" }} className="text-uppercase">
            {name}
          </Card.Title>
          <Card.Title>দাম: {price}.00 টাকা</Card.Title>
          <Card.Text>{description.slice(0, 60)}...</Card.Text>

          <button
            onClick={() => navigateToItemDetails(_id)}
            className="btn  btn-danger"
          >
            Show Details
          </button>
          {/* <button
            onClick={() => singleItemFood(_id)}
            className="btn  btn-danger ms-3"
          >
            Add to wish list
          </button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleItem;
