import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateItem = () => {
  const { itemId } = useParams();
  console.log(itemId);
  const { register, handleSubmit, reset } = useForm();
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/food/${itemId}`).then((res) => {
      setItem(res.data);
    });
  }, [itemId]);

  const onSubmit = (data) => {
    axios.put(`http://localhost:5000/food/${itemId}`, data).then((res) => {
      if (res.data.modifiedCount) {
        toast("Updated Successfully");
        reset();
      }
    });
  };

  return (
    <div className="container add-product">
      <Row>
        <Col md="6">
          <img
            style={{ width: "100%", height: "auto" }}
            className="vert-move mt-1"
            src="https://i.ibb.co/GRjJqPC/14245130-My-April8.jpg"
            alt=""
          />
        </Col>
        <Col md="6">
          <div className="card py-2">
            <h2 className="text-secondary fw-bold text-center banner-title">
              আপডেট করুন আপনার পণ্যটি
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control w-75"
                {...register("name")}
                defaultValue={item.name}
                placeholder="name"
              />{" "}
              <br />
              <input
                className="form-control w-75"
                type="number"
                {...register("price")}
                defaultValue={item.price}
                placeholder="price"
              />{" "}
              <br />
              <input
                className="form-control w-75"
                type="text"
                {...register("image")}
                defaultValue={item.image}
                placeholder="image"
              />{" "}
              <br />
              <select
                {...register("category")}
                className="form-control md-form w-75"
                defaultValue={item.category}
              >
                <option disabled>Select Category:</option>
                <option value="fast-food">fast-food</option>
                <option value="local-food">local-food</option>
                <option value="indian-food">indian-food</option>
                <option value="chinese-food">chinese-food</option>
              </select>
              <br />
              <input
                className="form-control w-75"
                type="text"
                {...register("description")}
                defaultValue={item.description}
                placeholder="description"
              />{" "}
              <br />
              <input className="form-control submit-btn" type="submit" />
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UpdateItem;
