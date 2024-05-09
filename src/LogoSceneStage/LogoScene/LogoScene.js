import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";


const LogoScene = (props) => {
  const { nodes, materials } = useGLTF("/maturus-logo.glb");

  const boxRef1 = useRef();
  const boxRef = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();

  // useFrame(() => {
  //   boxRef.current.rotation.y += 0.005;
  //   boxRef1.current.rotation.y += 0.005;
  //   boxRef2.current.rotation.y += 0.005;
  //   boxRef3.current.rotation.y += 0.005;
  // });

  useGSAP(() => {
    gsap.to(boxRef3.current.rotation, {
      duration: 4,
      y: Math.PI ,
      ease: "linear",
      repeat: 0,
    });
    gsap.to(boxRef2.current.rotation, {
      duration: 4,
      y: Math.PI ,
      ease: "linear",
      repeat: 0,
      delay: 0.5,
    });
    gsap.to(boxRef1.current.rotation, {
      duration: 4,
      y: Math.PI ,
      ease: "linear",
      repeat: 0,
      delay: 1,
    });
    gsap.to(boxRef.current.rotation, {
      duration: 4,
      y: Math.PI ,
      ease: "linear",
      repeat: 0,
      delay: 1.5,
    });
  }, []); 



  return (
    <>
      <OrbitControls
        enableDamping
        enablePan={false}
        enableZoom={false}
        dampingFactor={1}
        target={[0.2, 0, -1]}
      />
      <directionalLight intensity={1} color="#0094FF" position={[10, 5, 3]} />
      <directionalLight
        intensity={0.5}
        color="#0094FF"
        position={[-10, 5, 3]}
      />
      {/* //   <RotatingBox /> */}
      <group {...props} dispose={null}>
        <mesh
          ref={boxRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.004"]}
          position={[0, 5.612, 0]}
          rotation={[0, 0, -Math.PI / 4]}
          scale={[3.979, 3.958, 0.257]}
        >
          <meshStandardMaterial color="white" metalness={1} roughness={0.3} />
        </mesh>
        <mesh
          ref={boxRef1}
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.010"]}
          position={[0, 4.251, 0]}
          rotation={[0, 0, -Math.PI / 4]}
          scale={[3.004, 2.988, 0.173]}
        >
          <meshStandardMaterial color="white" metalness={1} roughness={0.3} />
        </mesh>
        <mesh
          ref={boxRef2}
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.011"]}
          position={[0, 2.835, 0]}
          rotation={[0, 0, -Math.PI / 4]}
          scale={[1.991, 1.981, 0.183]}
        >
          <meshStandardMaterial color="white" metalness={1} roughness={0.3} />
        </mesh>
        <mesh
          ref={boxRef3}
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.012"]}
          position={[0, 1.441, 0]}
          rotation={[0, 0, -Math.PI / 4]}
          scale={[1.003, 0.997, 0.179]}
        >
          <meshStandardMaterial color="white" metalness={1} roughness={0.3} />
        </mesh>
      </group>

    </>

  );
};
useGLTF.preload("/maturus-logo.glb");

export default LogoScene;
