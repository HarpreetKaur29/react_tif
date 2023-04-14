import React, { useEffect, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SlideCard from "./SlideCard"

const Slider =  () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 70,
    },
    breakpoints : {
        '(max-width : 480px)' : {
            slides : {
                perView : 1
            }
        }
    }
  })



  return (
    <>
    <div ref={sliderRef} className="keen-slider py-4 ">
      <div className="keen-slider__slide number-slide1"><SlideCard/></div>
      <div className="keen-slider__slide number-slide1"><SlideCard/></div>
      <div className="keen-slider__slide number-slide1"><SlideCard/></div>
      <div className="keen-slider__slide number-slide1"><SlideCard/></div>
    </div>
     
   </>
  )
}

export default Slider