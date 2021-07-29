import React, { useRef, useState,Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sky, OrbitControls } from "@react-three/drei"
import Box from "./objects/Box"
import Grass from "./objects/Grass"

export default function DrawArea(props) {
  return (
    <div style={{height:"600px", marginBottom:"50px"}}>
      {/* <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas> */}
      <Canvas camera={{ position: [15, 15, 30] }}>
      <Sky azimuth={1} inclination={0.6} distance={1000} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
         <Grass /> 
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2.5} />
    </Canvas>
    </div>
  );
}
