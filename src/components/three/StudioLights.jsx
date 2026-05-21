import React from 'react'

import {
  Environment,
  Lightformer
} from '@react-three/drei'

const StudioLights = () => {

  return (

    <group>

      <Environment resolution={256}>

        <Lightformer
          form="rect"
          intensity={5}
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
        <spotLight position={[-2, 10, 5]} intensity={Math.PI*0.2}  decay={0} />
        <spotLight position={[0, -25, 5]} intensity={Math.PI*0.2}  decay={0} />
        <spotLight position={[0, 15, 5]} intensity={Math.PI*0.9}  decay={0.1} />
      </Environment>

    </group>
  )
}

export default StudioLights