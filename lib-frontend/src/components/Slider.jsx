import React, { useState, useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/system";
const Slider = () => {
  const images = [
    "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg",
  ];

  const carousel = useRef(null);
  const inner = useRef(null);
  const [state, setState] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const [startx, setStartx] = useState(0);
  const [walk, setWalk] = useState();
  const [scrollLeft, setScrollLeft] = useState();

  return (
    <div>
      <Box
        ref={carousel}
        sx={{
          width: {
            xs: "400px",
            md: "900px",
          },
          //   height: "400px",
          overflowX: "hidden",
          position: "relative",
          border: "1px solid red",
        }}
      >
        <div
          ref={inner}
          style={{
            width: "1500px",
            position: "relative",
            left: `${walk}px`,
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            border: "1px solid green",
          }}
          onMouseDown={(el) => {
            el.preventDefault();
            setIsDown(true);
            const startx = el.nativeEvent.offsetX - inner.current.offsetLeft;
            setStartx(startx);
          }}
          onMouseLeave={() => {
            setIsDown(false);
          }}
          onMouseUp={() => {
            setIsDown(false);
          }}
          onMouseMove={(el) => {
            if (!isDown) return;
            const x = el.nativeEvent.offsetX;
            const walk = x - startx;
            setWalk(walk);

            const outer = carousel.current.getBoundingClientRect();
            const insider = inner.current.getBoundingClientRect();

            if (parseInt(inner.current.style.left) > 0) {
              inner.current.style.left = "0px";
            }

            // console.log(outer);
          }}
        >
          {images.map((image, key) => (
            <Box
              sx={{
                width: "400px",
                height: "400px",
                border: "1px solid green",
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <img key={key} src={image} alt="image" width="250px" />
            </Box>
          ))}
        </div>
        <ArrowBackIosIcon
          sx={{
            position: "absolute",
            top: 0,
          }}
        />
        <ArrowForwardIosIcon
          sx={{
            position: "absolute",
            top: 0,
          }}
        />
      </Box>
    </div>
  );
};

export default Slider;
