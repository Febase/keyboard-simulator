import { Vector3 } from '@react-three/fiber'
import React, { useRef } from 'react'
import { IkeyConfig } from '../../types/KeyboardType'
import Key from './Key'
import { keyConfigs } from './keyConfigs'

interface IKeyboardProps {
  position: Vector3
}

export default ({ position }: IKeyboardProps) => {
  return (
    <group position={position}>
      {keyConfigs.map((keyConfig: IkeyConfig) => (
        <Key
          key={`${keyConfig.row}-${keyConfig.column}`}
          keyConfig={keyConfig}
        />
      ))}
    </group>
  )
}
