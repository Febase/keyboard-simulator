// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styled from '@emotion/styled'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import KeyCap from '../Keyboard/Key/KeyCap'
import Lights from '../Lights'

const keyConfigs = [
  { row: 0, column: 0, colSpan: 1, rowSpan: 1, color: '#BFACE2' },
  { row: 0, column: 1, colSpan: 1, rowSpan: 1, color: '#FFF2F2' },
  { row: 1, column: 0, colSpan: 1, rowSpan: 2, color: '#FFEEED' },
]

export const ThreeFiber = () => {
  return (
    <CanvasContainer id="canvas-container">
      <Canvas camera={{ position: [-2, 2, 5] }}>
        {keyConfigs.map((keyConfig) => (
          <KeyCap
            config={keyConfig}
            position={[keyConfig.column, 0, keyConfig.row]}
          />
        ))}
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
