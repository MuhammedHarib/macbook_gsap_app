import React from 'react'

import {
  Environment,
  Lightformer
} from '@react-three/drei'

const StudioLights = () => {

  return (
    <group>

      {/* Environment reflections */}
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={7}
          position={[-10, 5, -5]}
          scale={[10, 10, 1]}
          rotation={[0, Math.PI / 2, 0]}
        />

        <Lightformer
          form="rect"
          intensity={3}
          position={[10, 0, 1]}
          scale={[5, 5, 1]}
        />
      </Environment>

      {/* REAL lights */}
      <ambientLight intensity={1.5} />

      <spotLight
        position={[0, 10, 10]}
        intensity={100}
        angle={0.3}
        penumbra={1}
        castShadow
      />

      <spotLight
        position={[-10, 5, 5]}
        intensity={100}
        angle={0.4}
        penumbra={1}
      />

      <directionalLight
        position={[5, 5, 5]}
        intensity={6}
      />

    </group>
  )
}

export default StudioLights