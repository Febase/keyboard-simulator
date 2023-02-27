import React from 'react'
import { Vector3 } from '@react-three/fiber'
import { IkeyConfig } from '../../types/KeyboardType'
import Key from './Key'
import { keyConfigs } from './keyConfigs'
import { Box } from '@react-three/drei'
import * as THREE from 'three'

interface IKeyboardProps {
  position: Vector3
}

export default ({ position }: IKeyboardProps) => (
  <group position={position}>
    {keyConfigs.map((keyConfig: IkeyConfig) => (
      <Key key={`${keyConfig.row}-${keyConfig.column}`} keyConfig={keyConfig} />
    ))}
    <BoardBottom />
    <Box position={[7.5, -0.75, 2.55]} scale={[16, 0.5, 5.5]}>
      <meshStandardMaterial attach="material" color="#c0c0c0" />
    </Box>
  </group>
)

const BoardBottom = () => {
  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.lineTo(0, 1)
  shape.lineTo(1, 0)
  shape.lineTo(0, 0)
  shape.closePath()

  const settings = {
    steps: 1,
    depth: 1,
    bevelEnabled: false,
  }

  return (
    <mesh
      position={[15.5, -0.5, -0.2]}
      scale={[5.5, 0.5, 16]}
      rotation={[0, -Math.PI * 0.5, 0]}
    >
      <extrudeGeometry args={[shape, settings]} />
      <meshStandardMaterial
        attach="material"
        color={'#c0c0c0'}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
