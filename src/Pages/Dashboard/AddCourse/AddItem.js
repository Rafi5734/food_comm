import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./AddItem.css";

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    axios.post("http://localhost:5000/food", data).then((res) => {
      if (res.data.insertedId) {
        toast("Added Successfully");
        reset();
      }
      // console.log(res);
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
              একটা ফুড আইটেম যোগ করুন
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control w-75"
                {...register("name")}
                placeholder="নাম"
              />{" "}
              <br />
              <input
                className="form-control w-75"
                type="number"
                {...register("price")}
                placeholder="দাম"
              />{" "}
              <br />
              <input
                className="form-control w-75"
                type="text"
                {...register("image")}
                placeholder="ছবি"
              />{" "}
              <br />
              <select
                {...register("category")}
                className="form-control md-form w-75"
              >
                <option selected disabled>
                  মেনু থেকে সিলেক্ট করুন:
                </option>
                <option>fast-food</option>
                <option>local-food</option>
                <option>indian-food</option>
                <option>chinese-food</option>
              </select>
              <br />
              <input
                className="form-control w-75"
                type="text"
                {...register("description")}
                placeholder="বিবরণী"
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

export default AddItem;
