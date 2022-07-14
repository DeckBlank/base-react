import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./_Slider.scss";

function Slider(props) {
  let { baner } = props;
  // const baner = ['/assets/images/Baners/Baner-1.png', '/assets/images/Baners/Baner-2.png', '/assets/images/Baners/Baner-3.png', '/assets/images/Baners/Baner-4.png'];
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === baner.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  });
  return (
    <div className="slideshow">
      <div className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {baner.map((item, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor: `${item.color}` }}
          >
            <div className="d-flex fd-column w-100p ai-center p-1" >
              {/* <img className="slide" src={item.img} alt={item.alt} /> */}
              <h1>{item.title} </h1>
              <p>{item.description}</p>             
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {baner.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot ${index === idx ? "activeDot" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  id: PropTypes.string,
};

export default Slider;
