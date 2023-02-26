import { Vector3 } from '@react-three/fiber'
import React, { useRef } from 'react'
import { IkeyConfig } from '../../types/KeyboardType'
import Key from './Key'
import { keyConfigs } from './keyConfigs'
import { Box } from '@react-three/drei'
import { Color, MeshStandardMaterial } from 'three'

interface IKeyboardProps {
  position: Vector3
}

export default ({ position }: IKeyboardProps) => {
  const caseMaterial = new MeshStandardMaterial({ color: new Color('#C0C0C0') })

  return (
    <group position={position}>
      {keyConfigs.map((keyConfig: IkeyConfig) => (
        <Key
          key={`${keyConfig.row}-${keyConfig.column}`}
          keyConfig={keyConfig}
        />
      ))}
      <Box
        position={[7.5, -0.35, 2.5]}
        scale={[17, 0.55, 5.5]}
        material={caseMaterial}
      />
    </group>
  )
}
