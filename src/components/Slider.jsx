import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoSlider = () => {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      {/* White dots override */}
      <style>{`
        .slick-dots li button:before {
          color: var(--background-light-color) !important;}`
      }</style>
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div className="slide">
          <h3>FOTO1</h3>
        </div>
        <div className="slide">
          <h3>FOTO2</h3>
        </div>
        <div className="slide">
          <h3>FOTO3</h3>
        </div>
        <div className="slide">
          <h3>FOTO4</h3>
        </div>
        <div className="slide">
          <h3>FOTO5</h3>
        </div>
        <div className="slide">
          <h3>FOTO6</h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center", color: "white" }}>
      </div>
    </div>
  );
}
export default AutoSlider;
