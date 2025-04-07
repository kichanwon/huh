import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

import GlassBottle from "./GlassBottle.jsx";

const WhiskeyBottle = () => {
  return (
    <Canvas camera={{ position: [0, 4, 10], fov: 50 }} style={{ height: "500px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <GlassBottle />
      </Suspense>
      <OrbitControls enableZoom={true} />
      <Environment preset="warehouse" />
    </Canvas>
  );
};

export default WhiskeyBottle;