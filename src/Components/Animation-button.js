import "./Main-button.css";
import "./Animation-button.css"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useEffect, useState, } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay} from 'swiper/modules'

const SwiperFunc = ({ finalButtonNames }) => {

    const swiperEl = document.querySelector("swiper-container");
    // const swiperElRef = useRef(null);
  return (
    <swiper-container slidesPerView={1} spaceBetween={0} loop={true} class="mySwiper" direction={"vertical"} autoplay={{delay: 100}} modules={[ Autoplay]}>
      {finalButtonNames.map((name, i) => {
        return <swiper-slide class="swiper-slid" key={i} >{ name }</swiper-slide>;
      })}
    </swiper-container>
  );
};

const AnimationButton = ({ id, active, data }) => {
 

  const buttonClasses = `main-button ${active ? "active" : ""}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const buttonNames = [];

  data.servicesData.filter((items) => {
    return buttonNames.push(items.buttonName);
  });

  // useGSAP(() => {
  //     const interval = setInterval(() => {
  //       gsap.to('.button', {
  //         duration: 3.5,
  //         y: -20,
  //         ease: 'power2.inOut',
  //         onComplete: () => {
  //           setCurrentIndex((prevIndex) => (prevIndex + 1) % data.servicesData.length);
  //           gsap.to('.button', {
  //             duration: 3.5,
  //             y: 0,
  //             ease: 'power2.inOut',
  //           });
  //         },
  //       });
  //     }, 5000);

  //     return () => clearInterval(interval);
  //   }, [currentIndex, data]);

  return (
    <>
      {console.log(buttonNames)}
      <div className="main-button-wrapper">
        <button className={buttonClasses} style={{padding:0}} onClick={() => {}}>
          <SwiperFunc finalButtonNames={buttonNames} />
        </button>
      </div>
    </>
  );
};

export default AnimationButton;
