import { useEffect, useState } from "react";
import "./DropDown.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const DropDown = ({ data, activeService, setActiveService }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(data.servicesData);

  const serviceClicked = (serviceId) => {
    setIsOpen(false)
    setActiveService(serviceId)
  }

  useGSAP(() => {
    if (isOpen) {
      gsap.to(".caretSVG", {
        duration: 0.3,
        rotation: 90,
      });

      gsap.to(".service-list-box",{
        opacity: 1,
        scale: 1,
        duration: 0.3,
        y:0
    })
} else {
    gsap.to(".caretSVG", {
        duration: 0.3,
        rotation: 0,
    });
    
    gsap.to(".service-list-box",{
        opacity: 0,
        scale: 0.5,
        duration: 0.01,
        y: -100
      })
    }
  }, [isOpen]);

  return (
    <div className="dropdown-inner-wrapper">
      <div className="active-tab" onClick={() => setIsOpen(!isOpen)}>
        <div className="caret">
          <svg
            className="caretSVG"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="m190.06 414l163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18"
            />
          </svg>
        </div>
        <div className="active-service-name">
          {data?.servicesData
            .filter((service) => service.id === activeService)
            .map((service) => service.buttonName)}
        </div>
      </div>
      <div className="service-list-box">
        <div className="services-list">
          {data.servicesData
            .filter((service) => service.id !== activeService)
            .map((service, index) => (
              <div className="service-item" onClick={()=> serviceClicked(service.id)} >
                <p>{service.buttonName}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
