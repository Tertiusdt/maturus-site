import "../Main-button/Main-button.css";
import "./Animation-button.css"
import React, {  useState, } from "react";
import { Autoplay} from 'swiper/modules'

const SwiperFunc = ({ finalButtonNames }) => {

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

  const buttonNames = [];

  data.servicesData.filter((items) => {
    return buttonNames.push(items.buttonName);
  });


  return (
    <>
      <div className="main-button-wrapper">
        <button className={buttonClasses} style={{padding:0}} onClick={() => {}}>
          <SwiperFunc finalButtonNames={buttonNames} />
        </button>
      </div>
    </>
  );
};

export default AnimationButton;
