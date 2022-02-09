import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";

import home_image from "./home-img.jpg";
import newArrivals from "./new_arrivals";

function Home() {
  const [current, setCurrent] = useState(0);
  const length = newArrivals.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(newArrivals) || newArrivals.length <= 0) {
    return null;
  }

  return (
    <section>
      <div className="imageBox">
        <img src={home_image} alt="toy_image"></img>
        <h2>Our Favorite Brands</h2>
      </div>
      <div className="sliderWrapper">
        <div>
          <h3>New Arrivals</h3>
        </div>
        <div>
          <div className="slider">
            <FaArrowAltCircleLeft
              className="left-arrow"
              onClick={prevSlide}
            />
            <FaArrowAltCircleRight
              className="right-arrow"
              onClick={nextSlide}
            />
            {newArrivals.map((item, index) => {
              return (
                <div
                  className={
                    index === current ? "slide active" : "slide"
                  }
                  key={index}
                >
                  {index === current && (
                    <img
                      src={item.image} alt=""
                      className="sliderImage"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
