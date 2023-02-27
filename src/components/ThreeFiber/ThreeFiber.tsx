// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styled from '@emotion/styled'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Keyboard from '../Keyboard'
import Lights from '../Lights'

export const ThreeFiber = () => {
  return (
    <CanvasContainer id="canvas-container">
      <Canvas
        camera={{ position: [-6, 6, 10] }}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
        // linear
      >
        <Keyboard position={[-8, 0, -2]} />
        <Lights />
        <axesHelper scale={10} />
        <OrbitControls />
      </Canvas>
    </CanvasContainer>
  )
}

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`
