import React from "react";
import Slider from "react-slick";

function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
<div class="slider-container">
<h2>Our  Partners/ Our Clients</h2>
<Slider {...settings}>
    <div className="slide"><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/></div>
    <div className="slide"><img src="http://www.webcoderskull.com/img/logo.png"/></div>
    <div className="slide"><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"/></div>
    <div className="slide"><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"/></div>
    <div className="slide"><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"/></div>
    <div className="slide"><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"/></div>
    <div className="slide"><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"/></div>
    <div className="slide"><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"/></div>
    <div className="slide"><img src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg"/></div>
    </Slider>
</div>
  );
}

export default HomeSlider;
