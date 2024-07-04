import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, CameraControls } from "@react-three/drei";
import { useRef, useEffect } from "react";

import "./ServiceSceneStage.css";
import ServiceScene from "./ServiceScene/ServiceScene";
import ServicesData from "../Data/Services-data";

// import { Leva } from "leva"

const ServiceSceneStage = ({ activeService, reloadKey }) => {
  const cameraControlRef = useRef();

  useEffect(() => {
  //   console.log(activeService);
  //   if (activeService) {
  //     const service = ServicesData.filter((service) => {
  //       return service.id === activeService ? service : null;
  //     });
  //     console.log(service);
  //     const cameraPos = service[0].cameraPos;
  //     if (cameraControlRef.current) {
  //       setTimeout(() => {
  //         cameraControlRef.current.setLookAt(
  //           cameraPos -0.2, 0, 2,cameraPos,0,-1,
  //           true
  //         );
  //       }, 500);
  //     }
  //   }

  })
  // }, [activeService]);

  // const handleControlsReady = () => {
  //   console.log('called');
  //   setTimeout(()=> {cameraControlRef.current.setLookAt(0, 0, 2, 0.2, 0, -1, true);},2000)

  // };

  return (
    <>
      {/* <Leva /> */}
      {/* <div style={{position: "absolute", width: "100vw", height: "100vh"}} ></div> */}
      <Canvas  key={reloadKey}
   >
    {/* <ServiceScene  activeService={activeService} /> */}
      </Canvas>
    </>
  );
};

export default ServiceSceneStage;
