import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import LogoData from "../../../Data/Logo-data"; // Import your LogoData array
import "./Client-logos.css";

const ClientLogos = () => {
  const scrollerOuter = useRef();
  const scrollerInner = useRef();
  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    const scroller = scrollerInner.current.cloneNode(true);
    const scroller2 = scrollerInner.current.cloneNode(true);
    scrollerOuter.current.appendChild(scroller)
    scrollerOuter.current.appendChild(scroller2)
 
  
    // scroller.setAttribute("data-animated", true);
    // const scrollerContent = Array.from(scrollerInner.current.children);
    // scrollerContent.forEach((item) => {
    //   const duplicatedItem = item.cloneNode(true);
    //   duplicatedItem.setAttribute("area-hidden", true);

    // });

  };

  return (
    <div className="client-logos " ref={scrollerOuter}>
      <div className="logo-item " ref={scrollerInner}>
        {LogoData.map((item) => (
          <img
            key={item.id}
            className={`logo ${item.name}`}
            src={require(`../../../Assets/logos/${item.url}`)}
            alt={`${item.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
