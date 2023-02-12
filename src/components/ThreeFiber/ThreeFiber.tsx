// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styled from '@emotion/styled'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export const ThreeFiber = () => {
  return (
    <CanvasContainer id="canvas-container">
      <Canvas camera={{ position: [-2, 2, 5] }}>
          <axesHelper scale={10}/>
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
