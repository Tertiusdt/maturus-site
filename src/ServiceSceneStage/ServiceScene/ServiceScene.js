import {
  CameraControls,
  Dodecahedron,
  Environment,
  Grid,
  MeshDistortMaterial,
  RenderTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
// import { useControls } from "leva";
import { useEffect, useMemo, useRef, useState, useContext } from "react";
// import { slideAtom } from "./Overlay";


import ServicesData from "./../../Data/Services-data";
import { ChildScene } from "../ChildScene/ChildScene";
import { WindowSizeContext } from "../../Contexts/ViewPortSizeContext";

const CameraHandler = ({ slideDistance , activeService, viewport}) => {
  const windowSize = useContext(WindowSizeContext)  
  const cameraControls = useRef();
  const lastSlide = useRef(0);

 
  // const { dollyDistance } = useControls({
  //   dollyDistance: {
  //     value: 10,
  //     min: 0,
  //     max: 50,
  //   },
  // });

  const moveToSlide = async () => {

    await cameraControls.current.setLookAt(
      lastSlide.current * (windowSize.windowWidth + slideDistance),
      3,
      // dollyDistance,
      10,
      lastSlide.current * (windowSize.windowWidth + slideDistance),
      0,
      0,
      true
    );
    await cameraControls.current.setLookAt(
      (activeService +1) * (windowSize.windowWidth + slideDistance),
      1,
      // dollyDistance,
      10,
      (activeService) * (windowSize.windowWidth + slideDistance),
      0,
      0,
      true
    );

    await cameraControls.current.setLookAt(
      activeService * (windowSize.windowWidth + slideDistance),
      0,
      5,
      activeService * (windowSize.windowWidth + slideDistance),
      0,
      0,
      true
    );
  };

  useEffect(() => {
    // Used to reset the camera position when the viewport changes
    const resetTimeout = setTimeout(() => {
      cameraControls.current.setLookAt(
        activeService * (windowSize.windowWidth + slideDistance),
        0,
        5,
        activeService * (windowSize.windowWidth + slideDistance),
        0,
        0
      );
    }, 200);
    return () => clearTimeout(resetTimeout);
  }, [activeService, slideDistance, windowSize]);

  useEffect(() => {
    if (lastSlide.current === activeService) {
      return;
    }
    moveToSlide();
    lastSlide.current = activeService;
  }, [activeService]);
  return (
    <CameraControls
      ref={cameraControls}
      touches={{
        one: 0,
        two: 0,
        three: 0,
      }}
      mouseButtons={{
        left: 0,
        middle: 0,
        right: 0,
      }}
    />
  );
};

const ServiceScene = ({activeService}) => {
  // const viewport = useThree((state) => state.viewport);
  // const { slideDistance } = useControls({
  //   slideDistance: {
  //     value: 1,
  //     min: 0,
  //     max: 10,
  //   },
  // });
  const factor = 0.009849948043805
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const windowSize = useContext(WindowSizeContext)
  


  useEffect(() => {
    setViewport({
      width: windowSize.windowWidth * factor,
      height: windowSize.windowHeight * factor
    });
  },[])


  return (
    <>
    <ambientLight intensity={0.1} />
    <Environment preset={"sunset"} />
    <CameraHandler 
    viewport={viewport}
    slideDistance={1}
    activeService={activeService - 1} />
    

    <Grid
      position-y={-viewport.height / 2}
      sectionSize={1}
      sectionColor={"#a6a6a6"}
      sectionThickness={1}
      cellSize={0.5}
      cellColor={"#a6a6a6"}
      cellThickness={0.3}
      infiniteGrid
      fadeDistance={250}
      fadeStrength={8}
    />
    {ServicesData.map((scene, index) => (
      
      <mesh
        key={scene.id}
        position={[index * (windowSize.windowWidth + 1), 0, 0]}
      >
        <planeGeometry args={[windowSize.windowWidth, windowSize.windowHeight]} />
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture attach="map">
            <ChildScene {...scene}   />
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
      
    ))}
   
  </>
  );
};

export default ServiceScene;
