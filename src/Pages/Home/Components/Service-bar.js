import MainButton from "../../../Components/Main-button/Main-button";
import AnimationButton from "../../../Components/Animation-button/Animation-button";
import DropDown from "../../../Components/DropDown/DropDown"
import { WindowSizeContext } from "../../../Contexts/ViewPortSizeContext";
import "./Service-bar.css";

import { useContext } from "react";


import { useGSAP } from "@gsap/react";

const ServiceBar = ({
  gsap,
  servicesData,
  setActiveService,
  activeService,
  scrollTrigger,
}) => {
  const windowSize = useContext(WindowSizeContext)

  const isMobile = windowSize.windowWidth < 835 ? true : false;

  useGSAP(() => {
    const serviceBar = document.querySelector(".services-bar");

    gsap.to(".button-wrapper", {
      duration: 0.01,
      scale: (index) => (index === 0 ? 1 : 0.8), // Scale down all but the first button
      transformOrigin: "center", // Scale from the top center
      ease: "power1.inOut",
      css: { position: "absolute" },
    });

    gsap.to(".anim-button-wrapper", {
      duration: 0.01,
      opacity: 1,
      scale: 1.05,
      y: 3,
    });

    gsap.from(".dropdown-wrapper", {
      scrollTrigger: {
        trigger: ".hero-section",
        duration: 0.01,
        toggleActions: "reverse play reverse play",
      },
      zIndex: 0,
      opacity: 0
    })


  

    gsap.from(".services-bar", {
      scrollTrigger: {
        trigger: ".hero-section",
        duration: 0.01,
        toggleActions: "reverse play reverse play",
      },
      

      onReverseComplete: () => {
        gsap.to(".button-wrapper", {
          css: { zIndex: 0 },
        });
        gsap.to(".button-wrapper", {
          duration: 0.5,
          scale: (index) => (index === 0 ? 1 : 0.8), // Scale down all but the first button
          transformOrigin: "center", // Scale from the top center
          stagger: 0.05,
          ease: "power1.inOut",
          css: { position: "absolute" },
        });
        gsap.to(".anim-button-wrapper", {
          duration: 0.3,
          opacity: 1,
          scale: 1.05,
        });
      

      },
    
      onComplete: () => {
        if (!isMobile) {
          gsap.to(".button-wrapper", {
            css: { zIndex: 300 },
          });
          gsap.to(".button-wrapper", {
            duration: 0.5,
            scale: (index) => (index === 0 ? 1 : 0.8), // Scale down all but the first button
            transformOrigin: "center", // Scale from the top center
            stagger: 0.05,
            ease: "power1.inOut",
            css: { position: "static" },
          });
        } else {
          // gsap.to(".button-wrapper",{
          //   opacity: 0
          // })
        }
        gsap.to(".anim-button-wrapper", {
          opacity: 0, 
          duration: 0.05
        });
        // gsap.to(".dropdown-wrapper", {
        //   css: { zIndex: 300 },
        //   opacity: 1
        // });
      },
    });
  }, []);

  return (
    <>
      <div className="services-bar ">
        {isMobile && (
          <div className="dropdown-wrapper">
            <DropDown
              data={{ servicesData }}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          </div>
        )}
        <div
          className=" anim-button-wrapper"
          onClick={() => scrollTrigger(2)}
          style={{ zIndex: 100, position: "absolute", opacity: 0 }}
        >
          <AnimationButton data={{ servicesData }} />
        </div>
        {!isMobile &&
          servicesData.map((item, index) => (
            <div
              className="button-wrapper"
              style={{ zIndex: servicesData.length - index }}
              key={item.id}
            >
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
