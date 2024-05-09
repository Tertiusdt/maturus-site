import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import "./LogoSceneStage.css"
import LogoScene from "./LogoScene/LogoScene";

const LogoSceneStage = () => {
  return (
    <>
      <Canvas
        
        className="canvas-stage"
        shadows
        // camera={{
        //   fov: 75,
        //   near: 0.1,
        //   far: 100,
        //   position: [0, 0, 1],
        // }}
      >
        <PerspectiveCamera makeDefault aspect={5 /5} position={[0, 0, 15]}   />
        <LogoScene position={[0,-5,0]} />

      </Canvas>
    </>
  );
};

export default LogoSceneStage;
