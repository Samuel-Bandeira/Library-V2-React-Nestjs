import { Box } from "@mui/material";
import React, { useRef, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Carousel = ({ slides }) => {
  const sliderData = slides;
  const length = slides.length;
  const [isDown, setIsDown] = useState(false);
  const [xAxis, setXAxis] = useState(false);
  const [walk, setWalk] = useState(false);

  const slider = useRef(null);
  const container = useRef(null);
  return (
    <div
      ref={container}
      style={{
        border: "1px solid red",
        maxWidth: "60vw",
        overflow: "hidden",
        width: "600px",
        height: "400px",
        position: "relative",
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        setIsDown(true);
        const xAxisValue = e.nativeEvent.offsetX - slider.current.offsetLeft;
        setXAxis(xAxisValue);
      }}
      onMouseLeave={() => {
        setIsDown(false);
      }}
      onMouseUp={() => {
        setIsDown(false);
      }}
      onMouseMove={(e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.nativeEvent.offsetX;
        const walk = x - xAxis;
        setWalk(walk);
        slider.current.style.left = `${x - xAxis}px`;
        const container_rect = container.current.getBoundingClientRect();
        const slider_rect = slider.current.getBoundingClientRect();
        if (parseInt(slider.current.style.left) > 0) {
          slider.current.style.left = 0;
        } else if (slider_rect.right < container_rect.right) {
          slider.current.style.left = `-${
            slider_rect.width - container_rect.width
          }px`;
        }
      }}
    >
      <div
        ref={slider}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${length},1fr)`,
          gap: "90px",
          position: "absolute",
          pointerEvents: "none",
        }}
      >
        {sliderData.map((el, index) => (
          <img key={index} src={el.img} alt="image" width="250px" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
