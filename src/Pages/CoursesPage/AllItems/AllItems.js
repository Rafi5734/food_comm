import { Toast } from "bootstrap";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Pagination,
  Row,
  Spinner,
} from "react-bootstrap";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import SingleItem from "../SingleItem/SingleItem";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const count = items.length;
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setItems(data);
      })
      .catch((error) => Toast.error(error.message));
  }, []);

  const [tempItems, setTempItems] = useState(items);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const filterItems = (itemCate) => {
    const cateServices = items.filter((currentItems) => {
      return currentItems.category === itemCate;
    });
    if (itemCate === "All") {
      setTempItems(items);
    } else {
      setTempItems(cateServices);
    }
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(tempItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentItems = tempItems.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <>
      {!count ? (
        <div className="text-center my-5 private-spinner py-5">
          <Spinner variant="danger" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <h6>Loading...</h6>
        </div>
      ) : (
        <Container className="mb-5">
          <PageTitle title="Foods"></PageTitle>
          <h2 className="text-center text-uppercase mt-5 mb-4 feature font-weight-bold">
            আমাদের মেনু সমূহ
          </h2>
          <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
            যা আমরা আপনাদের জন্য প্রস্তুত করেছি
          </p>
          <Container>
            <ButtonGroup className="flex-wrap" aria-label="Basic example">
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterItems("All")}
              >
                সকল মেনু
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterItems("fast-food")}
              >
                ফাস্ট ফুড
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterItems("local-food")}
              >
                লোকাল ফুড
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterItems("indian-food")}
              >
                ইন্ডিয়ান ফুড
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterItems("chinese-food")}
              >
                চাইনিজ ফুড
              </Button>
            </ButtonGroup>
          </Container>
          <Row>
            {currentItems.length === 0
              ? items?.map((singleItem) => (
                  <SingleItem key={singleItem?._id} singleItem={singleItem} />
                ))
              : currentItems.map((singleItem) => (
                  <SingleItem
                    key={singleItem._id}
                    singleItem={singleItem}
                  ></SingleItem>
                ))}
          </Row>
          <div className="d-flex justify-content-center">
            <Pagination className="mt-4">
              {[...Array(totalPages)].map((page, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </Container>
      )}
    </>
  );
};

export default AllItems;
