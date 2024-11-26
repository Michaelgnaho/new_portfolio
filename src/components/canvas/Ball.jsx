import React from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, useTexture } from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <mesh scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[0, 0, 0]}  // Adjusted to remove animation
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '100%' }} // Responsive canvas
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <Ball imgUrl={icon} />
    </Canvas>
  );
};

export default BallCanvas;