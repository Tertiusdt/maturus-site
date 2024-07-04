import {
  AccumulativeShadows,
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  Sphere,
  useGLTF,
} from "@react-three/drei";

import * as THREE from "three";

import React, { useEffect, useRef, useState } from "react";
import { DEG2RAD } from "three/src/math/MathUtils";

export const ChildScene = ({ scenePath, ...props }) => {
  const { nodes, materials, scene } = useGLTF(scenePath);
  const [cameraDistance, setCameraDistance]= useState(3)
  const [objectHeight, setobjectHeight]= useState(0)
  // const { nodes, materials, scene, errors } = useGLTF('service-models/web-and-mobile.glb');
  
  const orbit = useRef();
  useEffect(()=> {
    setCameraDistance(window.innerWidth < 750 ? 17.5 : 9);
    setobjectHeight(window.innerWidth < 750 ? 2 : 0);

  }, [])
  
  useEffect(() => {
    orbit.current.enabled = false;

    const traverseAndSetShadows = (object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }

      if (object.children && object.children.length > 0) {
        object.children.forEach((child) => {
          traverseAndSetShadows(child);
        });
      }
    };

    scene.traverse((child) => {
      // console.log(child);
      traverseAndSetShadows(child);
    });
  }, [scene]);

  const ratioScale = Math.min(2.5, Math.max(3, window.innerWidth / 1920));
  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <group dispose={null}>
        {console.log(cameraDistance, "inline")}
        <PerspectiveCamera makeDefault position={[0, 0, cameraDistance]} near={0.5} />
        {/* <spotLight castShadow={true} position={[10,3,3]}  /> */}
        <OrbitControls
          ref={orbit}
          autoRotate
          enablePan={false}
          maxPolarAngle={DEG2RAD * 75}
          // minDistance={6}
          // maxDistance={10}
          autoRotateSpeed={0.8}
        />
        <primitive position={[0,objectHeight,0]} object={scene} scale={ratioScale} />
        <ambientLight intensity={0.5} color="white" />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1}
          castShadow={true}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <AccumulativeShadows
          frames={200}
          alphaTest={0.9}
          scale={30}
          position={[0, -0.005, 0]}
          color="blue"
          opacity={0.8}
        >
          <RandomizedLight
            castShadow={true}
            amount={4}
            radius={9}
            intensity={0.8}
            ambient={0.25}
            position={[10, 5, 15]}
          />
          <RandomizedLight
            castShadow={true}
            amount={4}
            radius={5}
            intensity={0.5}
            position={[-5, 5, 15]}
            bias={0.001}
          />
        </AccumulativeShadows>
        <Environment blur={0.8} background>
          <Sphere scale={15}>
            <meshBasicMaterial color="white" side={THREE.BackSide} />
          </Sphere>
          <Lightformer
            position={[5, 0, -5]}
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="#0094FF" // (optional = white)
            scale={[3, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />

          <Lightformer
            position={[-5, 0, 1]}
            form="circle" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="#0094FF" // (optional = white)
            scale={[2, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />

          <Lightformer
            position={[0, 5, -2]}
            form="ring" // circle | ring | rect (optional, default = rect)
            intensity={0.5} // power level (optional = 1)
            color="#0094FF" // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
          <Lightformer
            position={[0, 0, 5]}
            form="rect" // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color="#0094FF" // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]}
          />
        </Environment>
      </group>
    </>
  );
};

useGLTF.preload("service-models/web-and-mobile.glb");
//   useGLTF.preload("/models/model3_scene.glb");
//   useGLTF.preload("/models/semi_scene.glb");
