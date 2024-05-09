import MainButton from "../../../Components/Main-button";
import { useGSAP } from "@gsap/react";

import "./Service-bar.css";
import AnimationButton from "../../../Components/Animation-button";

const ServiceBar = ({
  gsap,
  servicesData,
  setActiveService,
  activeService,
}) => {
  useGSAP(() => {
    const serviceBar = document.querySelector(".services-bar");

    gsap.to(".button-wrapper", {
      duration: 0.01,
      scale: (index) => index === 0 ? 1 : 0.8, // Scale down all but the first button
      transformOrigin: "center", // Scale from the top center
      // stagger: 0.1,
      ease: "power1.inOut",
      css: { position: "absolute" }
    });

    gsap.to(".anim-button-wrapper", {
      duration: 0.01,
      opacity: 1,
      scale: 1.05,
      
      
    });

    gsap.from(".services-bar", {
      scrollTrigger: {
        trigger: ".hero-section",
        duration: 0.01,
        toggleActions: "reverse play reverse play",
      },


      onReverseComplete: () => {
        // serviceBar.classList.add("white-background");
        gsap.to(".button-wrapper", {
          duration: 0.5,
          scale: (index) => index === 0 ? 1 : 0.8, // Scale down all but the first button
          transformOrigin: "center", // Scale from the top center
          stagger: 0.05,
          ease: "power1.inOut",
          css: { position: "absolute" }
        });
        gsap.to(".anim-button-wrapper", {
          duration: 0.3,
          opacity: 1,
          scale: 1.05,
          
        });
      },
      onComplete: () => {
        // serviceBar.classList.remove("white-background");
        gsap.to(".button-wrapper", {
          duration: 0.5,
          scale: (index) => index === 0 ? 1 : 0.8, // Scale down all but the first button
          transformOrigin: "center", // Scale from the top center
          stagger: 0.05,
          ease: "power1.inOut",
          css: { position: "static" }
        });
        gsap.to(".anim-button-wrapper", {
          duration: 0.3,
          opacity: 0,
                  
        });
      },
    });

    // gsap.to(".button-wrapper", {
    //   duration: 5,
    //   scale: (index) => index === 0 ? 1 : 0.8, // Scale down all but the first button
    //   transformOrigin: "center top", // Scale from the top center
    //   stagger: 0.1,
    //   css: { position: "absolute" }
    // });
  },[]);

  return (
    <>
    <div className="services-bar ">
    {/* <div className="services-bar white-background"> */}
    <div className=" anim-button-wrapper" style={{zIndex: 100, position: "absolute", opacity: 0}}>
      <AnimationButton
      
      data={{servicesData}}
      />
    </div>
      {servicesData.map((item, index) => (
        <div className="button-wrapper" style={{zIndex: servicesData.length - index}} key={item.id}>
          {console.log("ITEMS",item)}
          <MainButton
            key={item.id}
            id={item.id}
            active={activeService === item.id}
            setActiveService={setActiveService}
            buttonName={item.buttonName}
            />
        </div>
      ))}
    </div>
      </>
  );
};

export default ServiceBar;
