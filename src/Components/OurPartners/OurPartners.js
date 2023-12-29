import React from "react";
import "./OurPartners.css";

const OurPartners = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mt-5 mb-4 feature font-weight-bold">
        সারপ্রাইজ অফার
      </h2>
      <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
        বেস্ট সারপ্রাইজ অফার পেতে আমাদের সাথে থাকুন
      </p>
      <div className="container mt-5 pt-2"></div>
      <div className="row mx-2 ">
        <div className="col-sm offer-col1 mb-2">
          <div>
            <h2>৩০% ক্যাশব্যাক অফার</h2> <h6>বিকাশে সর্বোচ্চ ৬০% ক্যাশব্যাক</h6>
          </div>
        </div>
        <div className="col-sm offer-col2 mb-2">
          <div>
            <h2>KFC তে ২৫% এক্সট্রা ছাড়</h2> <h6> হোম ডেলিভারি অর্ডারে</h6>
          </div>
        </div>
        <div className="col-sm offer-col3 mb-2">
          <div>
            <h2>১০% এক্সট্রা ছাড় শুশিতে</h2>{" "}
            <h6>বিকাশে সর্বোচ্চ ৪০% ক্যাশব্যাক</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
