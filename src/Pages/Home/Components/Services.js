import { useEffect, useState } from "react";
import MoreInfoModal from "./../../../Modals/more-info-modal";
import InlineButton from "../../../Components/Inline-button";
import "./Services.css";
import ServiceSceneStage from "../../../ServiceSceneStage/ServiceSceneStage";
import { useGSAP } from "@gsap/react";

const Services = ({
  gsap,
  servicesData,
  activeService,
  setModalActive,
  reloadKey,
}) => {
  const [service, setService] = useState(null);

  //   useGSAP(
  //     () => {

  // gsap.from(".services-wrapper", {
  //     scrollTrigger: {
  //       trigger: ".services-section",
  //       toggleActions: "play reverse play reverse",
  //     },
  //     opacity: 0,
  //     y: -100,
  //     duration: 1.5,
  //     delay:1,
  //     ease: "power4.inOut",
  //   });

  //     },
  //     { dependencies: [activeService, ()=> ] }
  //   );

  useEffect(() => {
    setService(servicesData.filter((item) => item.id === activeService)[0]);
  }, [activeService]);

  return (
    <>
      <div className="services-wrapper">
        {/* <div className="service-desc-wrapper">
          <div className="service-header">
            <h1>{service?.name}</h1>
          </div>
          <div className="service-description">
            {service?.description}
            <div className="button-wrapper">
              {service?.descriptionLong && (
                <InlineButton
                  id={"Service-More"}
                  buttonName={"More"}
                  setModalActive={setModalActive}
                />
              )}
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <div className="stage-wrapper">
          <ServiceSceneStage
            activeService={activeService}
            reloadKey={reloadKey}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
