import MainButton from "../../../Components/Main-button";
import { useGSAP } from "@gsap/react";

import "./Service-bar.css";

const ServiceBar = ({gsap, servicesData, setActiveService, activeService }) => {
    useGSAP(
        () => {
            // gsap.from('.main-button', {
            //     opacity: 0,
            //     y: -20,
            //     duration: 0.5,
            //     stagger: 0.1, // Adjust stagger value as needed
            //     ease: 'power4.inOut',
            //   });
            
            const serviceBar = document.querySelector(".services-bar")
            gsap.from(".services-bar", {
                scrollTrigger: {
                    trigger: ".hero-section",
                    toggleActions: "reverse play reverse play",
                },
                // backgroundColor: "white",
                // duration: 0.1,
                // ease: "power4.inOut",
                onReverseComplete: ()=> {
                  serviceBar.classList.add("white-background")
                },
                onComplete: ()=> {
                  serviceBar.classList.remove("white-background")
                }
            });

            // gsap.to('.main-button', {
            //     scrollTrigger: {
            //         trigger: ".hero-section",
            //         toggleActions: "play reset play reset",
            //     },
            //     backgroundColor: "#0094FF",
            //     color: "white",
            //     border: "none",
            //     duration: 0.4,
            //     stagger:  0.8, // Adjust stagger value as needed
            //     repeat: -1,
                
            //   });
           
        })


  return (
    <div className="services-bar white-background">
      {servicesData.map((item, index) => (
        <MainButton key={item.id} id={item.id} buttonName={item.buttonName} active={activeService === item.id} setActiveService={setActiveService} />
      ))}
    </div>
  );
};

export default ServiceBar;
