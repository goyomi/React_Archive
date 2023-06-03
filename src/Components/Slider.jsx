import React, { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 3; // 슬라이드 이미지 개수
  const imgWidth = 100; // 슬라이드 이미지 너비 (vw)

  const nextSlide = () => {
    let newSlide = currentSlide + 1;
    if (newSlide > slideLength) {
      newSlide = 1;
    }
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    let newSlide = currentSlide - 1;
    if (newSlide < 1) {
      newSlide = slideLength;
    }
    setCurrentSlide(newSlide);
  };

  const slideStyle = {
    transform: `translateX(-${imgWidth * (currentSlide - 1)}vw)`,
    transition: "0.5s",
    display: "flex",
  };

  return (
    <div>
      <div className="slideContainer">
        <ul className="slide" style={slideStyle}>
          <li>
            <img src="https://via.placeholder.com/800x200.png?text=1" alt="" />
          </li>
          <li>
            <img src="https://via.placeholder.com/800x200.png?text=2" alt="" />
          </li>
          <li>
            <img src="https://via.placeholder.com/800x200.png?text=3" alt="" />
          </li>
          <li>
            <img src="https://via.placeholder.com/800x200.png?text=4" alt="" />
          </li>
          <li>
            <img src="https://via.placeholder.com/800x200.png?text=4" alt="" />
          </li>
          <li>
            <img src="https://via.placeholder.com/800x200.png?text=6" alt="" />
          </li>
        </ul>
      </div>
      <div className="btnContainer">
        <button className="btnPrev" onClick={prevSlide}>
          이전
        </button>
        <button className="btnNext" onClick={nextSlide}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Slider;
