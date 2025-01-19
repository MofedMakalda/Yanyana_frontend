// import { Button } from '@mui/material'
// import React, { useState } from 'react'
// import {ArrowBigLeft,ArrowBigRight} from "lucide-react"

// interface ImageSliderProps{
//     imageUrls: string []
// }

// const ImageSlider = ({imageUrls}:ImageSliderProps) => {
//     const [imageIndex, setImageIndex]= useState(0)
//   return (

//     <div style={{width:"100%", height:"100%", position:"relative"}}>
//         <img src={imageUrls[imageIndex]} style={{
//             objectFit:"cover",
//             width:"100%",
//             height:"100%",
//             display:"block"

//         }}/>
//         <Button sx={{position:"absolute", all:"unset",  top:0, bottom:0}}><ArrowBigLeft/></Button>
//         <Button sx={{position:"absolute",  all:"unset", top:0, bottom:0}}><ArrowBigRight/></Button>
//     </div>
//   )
// }

// export default ImageSlider

import  { useState } from "react";
import { Button, useMediaQuery } from "@mui/material";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface ImageSliderProps {
  imageUrls: string[];
}


const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
    const isDesktop = useMediaQuery("(min-width:900px)");
  

  const handlePrev = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {imageUrls.map((image, index) => (
          <img
            key={index}
            src={image}
            //    alt={`Slide ${imageIndex + 1}`}
            style={{
              objectFit: "cover",
              width: "100%",
              height: isDesktop? "500px":"400px",
              display: "block",
              translate: `${-100 * imageIndex}%`,
              transition: "translate 300ms ease-in-out",
              flexShrink: 0,
              flexGrow: 0,
            }}
          />
        ))}
      </div>

      <Button
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          // background: 'rgba(0, 0, 0, 0.5)',
          color: "white",
        }}
        aria-label="Previous Image"
      >
        <ArrowBigLeft size={35} />
      </Button>
      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          // background: 'rgba(0, 0, 0, 0.5)',

          color: "white",
        }}
        aria-label="Next Image"
      >
        <ArrowBigRight size={35} />
      </Button>
    </div>
  );
};

export default ImageSlider;
