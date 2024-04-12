import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from '@react-three/fiber'

const RotatingBox = () => {
    const boxRef = useRef();
  
    useFrame(() => {
      // boxRef.current.rotation.x += -0.01;
      boxRef.current.rotation.y += 0.005;
    });
  
    return (
      <mesh ref={boxRef} castShadow position={[0.2, 0, -1]}>
        <boxGeometry />
        <meshStandardMaterial color="white" metalness={1} roughness={0.3} />
    </mesh>
    );
  };

const LogoScene = () => {
  const objectRef = useRef();
//   const boxRef1 = useRef();

  useFrame(() => {
    // boxRef.current.rotation.x += 0.01;
    // boxRef.current.rotation.y += 0.01;
    // boxRef1.current.rotation.y += 0.02;
    // boxRef1.current.rotation.x += 0.01;
  });

  return (
    <>
      <OrbitControls enableDamping enablePan={false} 
        enableZoom={false} dampingFactor={1} target={[0.2, 0, -1]} />
      <directionalLight intensity={1} color="#0094FF" position={[10, 5, 3]} />
      <directionalLight intensity={0.5} color="#0094FF" position={[-10, 5, 3]} />
      <RotatingBox />
    </>
  );
};

export default LogoScene;
