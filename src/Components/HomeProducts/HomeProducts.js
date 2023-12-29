import React, { useEffect, useState } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleItem from "../../Pages/CoursesPage/SingleItem/SingleItem";
import PageTitle from "../Shared/PageTitle/PageTitle";

const HomeProducts = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);

  if (isLoading) {
    return (
      <div className="text-center my-5 private-spinner py-5">
        <Spinner variant="danger" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h6>Loading...</h6>
      </div>
    );
  }

  const randomCourses = courses.sort(() => Math.random() - 0.5).slice(0, 6);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = randomCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  return (
    <Container className="mb-5">
      <PageTitle title="Foods"></PageTitle>
      <h2 className="text-center text-uppercase mt-5 mb-4 feature font-weight-bold">
        আমাদের আইটেম সমূহ
      </h2>
      <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
        যা আমরা আপনাদের জন্য প্রস্তুত করেছি
      </p>
      <Row>
        {currentCourses.map((singleItem) => (
          <SingleItem key={singleItem._id} singleItem={singleItem} />
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        {/* // button to show all products */}
        <Link to="/allFoods">
          <Button className="btn btn-danger">আরো দেখুন</Button>
        </Link>
      </div>
    </Container>
  );
};

export default HomeProducts;
