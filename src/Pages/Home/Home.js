import React from "react";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";
import OurPartners from "../../Components/OurPartners/OurPartners";
import PageTitle from "../../Components/Shared/PageTitle/PageTitle";
import Reviews from "../AllReviews/Reviews/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      {/* <AllCourses></AllCourses> */}
      <HomeProducts></HomeProducts>
      <OurPartners></OurPartners>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
  );
};

export default Home;
