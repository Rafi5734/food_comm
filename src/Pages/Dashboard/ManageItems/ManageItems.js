import React from "react";
import { Button, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../Components/Shared/Loading/Loading";

const ManageItems = () => {
  const {
    data: allCourses,
    setAllCourses,
    isLoading,
    refetch,
  } = useQuery("allFoods", () =>
    fetch("http://localhost:5000/food", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  //for delete
  const handleDeleteCourse = (id) => {
    const proceed = window.confirm("Are Sure To Cancel This Order?");
    if (proceed) {
      const url = `http://localhost:5000/food/${id}`;
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
            const remaining = allCourses.filter((course) => course._id !== id);
            setAllCourses(remaining);
          }
        });
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className=" manage-course">
        <div className="container">
          <h1 className="text-dark fw-bold pt-5 pb-3 fs-1">ম্যানেজ আইটেম</h1>
          <Table striped hover responsive variant="dark">
            <thead>
              <tr className="bg-dark text-white">
                <th>ক্রমিক</th>
                <th>নাম</th>
                <th>ক্য়াটেগরী</th>
                <th>আপডেট</th>
                <th>ডিলেট</th>
              </tr>
            </thead>
            <tbody>
              {allCourses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.name}</td>
                  <td>{course.category}</td>
                  <td>
                    <Link to={`update/${course._id}`}>
                      <Button className="px-3 btn-success">আপডেট</Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      className="px-3 btn-danger"
                      onClick={() => handleDeleteCourse(course._id)}
                    >
                      ডিলেট
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
