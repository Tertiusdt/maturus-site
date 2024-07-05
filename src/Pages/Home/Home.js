import Contact from "./Components/Contact";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import ServiceBar from "./Components/Service-bar";
import ClientLogos from "./Components/Client-logos";
import ServicesData from "../../Data/Services-data";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useContext, useEffect, useRef, useState } from "react";
import "./Home.css";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";
import { WindowSizeContext } from "../../Contexts/ViewPortSizeContext";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Home = ({
  setMoreServiceData,
  setModalActive,
  activeService,
  setActiveService,
  modalActive,
}) => {
  const [reloadKey, setReloadKey] = useState(0);
  gsap.registerPlugin(ScrollTrigger);
  const [servicesRef, ServicesinView] = useInView({
  });
  const windowSize = useContext(WindowSizeContext)
  console.log("CONTEXT", windowSize);


  useEffect(() => {
    setReloadKey((prevKey) => prevKey + 1);
    if (ServicesinView && activeService === 0) {
      setActiveService(1);
    }
    if (!ServicesinView) {
      setActiveService(1);
    }
  }, [ServicesinView]);

  const scrollToSection = () => {
    gsap.to(window, {
      scrollTo: "#section2",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  useGSAP(
    () => {
      if (modalActive === false) {
        /////////// services-bar  ////////////////////////////
        gsap.to(".servicebar-wrapper", {
          scrollTrigger: {
            trigger: ".slogan",
            toggleActions: "none play reverse play",
          },
          y: -0.85 * windowSize.windowHeight,

          duration: 1,
          ease: "power4.inOut",
          // onUpdate: ()=>{
          //   setModalActive(false)
          // }
        });

        gsap.to(".servicebar-wrapper", {
          scrollTrigger: {
            trigger: ".about-text",
            toggleActions: "play reverse play reverse",
          },
          opacity: 0,
          duration: 1,
        });

        /////////// services-bar - end  ////////////////////////////

        /////////// Client Logos  ////////////////////////////
        gsap.to(".clientlogos-wrapper", {
          scrollTrigger: {
            trigger: ".about-text",
            toggleActions: "play reverse play reverse",
          },
          y: -0.85 *  windowSize.windowHeight,
          duration: 1,
          opacity:  1,
          ease: "power4.inOut",
        });

        gsap.to(".clientlogos-wrapper", {
          scrollTrigger: {
            trigger: ".slogan",
            toggleActions: "play reverse play reverse",
          },

          opacity: 0,
          duration: 1.5,
        });

        /////////// Client Logos - end ////////////////////////////
        /////////// Maturus Name  ////////////////////////////

        gsap.from(".wrapper", {
          scrollTrigger: {
            trigger: ".slogan",
            toggleActions: "play none restart none",
          },
          opacity: 0,
          y: -100,
          duration: 2,
          ease: "power4.inOut",
        });

        gsap.from(".scroll-indicator", {
          scrollTrigger: {
            trigger: ".slogan",
            toggleActions: "play none reset none",
          },
          opacity: 0,
          delay: "3",
          y: -50,
          duration: 2,
          ease: "power4.inOut",
        });

        /////////// Maturus Name - end  ////////////////////////////
        
      }
    },
    { dependencies: [windowSize] }
  );

  // useGSAP(() => {
  //   gsap.from(".services-wrapper", {
  //     scrollTrigger: {
  //       trigger: ".services-section",
  //       toggleActions: "play reverse play reverse",
  //     },
  //   });
  // });

  // useGSAP(
  //   () => {
  //     gsap.from(".services-wrapper", {
  //       scrollTrigger: {
  //         trigger: ".services-section",
  //         // toggleActions: "play reverse play reverse",
  //       },

  //       // onStart: () => {
  //       //   // setReloadKey(prevKey => prevKey + 1);
  //       //   document
  //       //   .querySelector(".services-wrapper")
  //       //   ?.classList?.remove("animate-fade-in-up");
  //       // },

  //       // onInterrupt: () => {
  //       //   const servicesWrapper = document.querySelector(".services-wrapper");
  //       //   if (servicesWrapper.classList.contains("animate-fade-in-up")) {
  //       //     servicesWrapper.classList.remove("animate-fade-in-up");
  //       //   } else {
  //       //     servicesWrapper.classList.add("animate-fade-in-up");
  //       //   }
  //       // },

  //       onComplete: () => {
  //         document
  //           .querySelector(".services-wrapper")
  //           .classList?.add("animate-fade-in-up");
  //       },

  //       onReverseComplete: () => {
  //         document
  //           .querySelector(".services-wrapper")
  //           ?.classList?.remove("animate-fade-in-up");
  //         // setReloadKey((prevKey) => prevKey + 1);
  //       },

  //      onStart: () => {
  //       // setReloadKey((prevKey) => prevKey + 1);
  //      }
  //     });
  //   },
  //   { dependencies: [ServicesinView, activeService] }
  // );

  useGSAP(
    () => {
      gsap.from(".contact-section", {
        scrollTrigger: {
          trigger: ".contact-section",
          toggleActions: "play none restart none",
        },
        opacity: 0,
  //       duration: "1"
  //       // onInterrupt: () => {
  //       //   const contactWrapper = document.querySelector(".contact-section");
  //       //   if (contactWrapper.classList.contains("animate-fade-in-up-contact")) {
  //       //     contactWrapper.classList.remove("animate-fade-in-up-contact");
  //       //   } else {
  //       //     contactWrapper.classList.add("animate-fade-in-up-contact");
  //       //   }
  //       // },


  //       onStart: () => {
  //         document
  //           .querySelector(".contact-section")
  //           .classList?.add("animate-fade-in-up-contact");
  //       },

  //       onReverseComplete: () => {
  //         document
  //           .querySelector(".contact-section")
  //           ?.classList?.remove("animate-fade-in-up-contact");
        // },
      });
    },
    { dependencies: [] }
  );

  return (
    <div className="home-page" >
      <div className="servicebar-wrapper">
        <ServiceBar
         scrollTrigger={() => scrollToSection(servicesRef)}
          gsap={gsap}
          servicesData={ServicesData}
          setActiveService={setActiveService}
          activeService={activeService}
        />
      </div>
      <div className="clientlogos-wrapper">
        <ClientLogos />
      </div>
      <div className="home-wrapper">
        <section className="hero-section"style={{backgroundColor: "darkcyan"}}>
          <Hero />
        </section>
        <section id="section2" ref={servicesRef} className="services-section"style={{backgroundColor: "red"}}>
          <Services
            gsap={gsap}
            servicesData={ServicesData}
            activeService={activeService}
            setModalActive={setModalActive}
            reloadKey={reloadKey}
          />
        </section>
        <section className="contact-section" style={{backgroundColor: "green"}}>
          <About />
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
