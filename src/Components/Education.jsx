import React from "react";
import EduGIF from "../Photos/edu-gif.json";
import Lottie from "lottie-react";
import Footer from "../Footer/Footer";

const Education = () => {
  return (
    <>
      <div className="primary-container">
        <div className="secondary-container edu-secondary-container">
          <div className="edu-info-container">
            <h1 className="studies">
              2019 - 2023 <span> | </span>
              Bechlor of Engineering
            </h1>
            <p className="field">Electronics And Communication</p>
            <p className="field">
              Goverment Engineering College Bharuch
            </p>
            <p className="field">CGPA - 7.83</p>
            <br />

            <h1 className="studies">
              2018 - 2019 <span> | </span>
              Higher Secondary
            </h1>
            <p className="field">Bhulka Bhavan (EM) / Science (Maths)</p>
            <p className="field">Percentage - 61%</p>
            <br />
            <h1 className="studies">
              2016 - 2017 <span> | </span>
              Secondary
            </h1>
            <p className="field">Bhulka Bhavan (EM)</p>
            <p className="field">Percentage - 78%</p>
          </div>
          <div className="edu-image-container">
            <Lottie animationData={EduGIF} className="gif" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Education;
