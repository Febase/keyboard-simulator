import { useFrame } from '@react-three/fiber'
import React, { useState } from 'react'
import KeyCap from './Key/KeyCap'
import KeyLegend from './Key/KeyLegend'
import { IkeyConfig } from '../../types/KeyboardType'
import { KEY_DOWN_DURATION, KEY_DOWN_POSITION } from './Key/consts'

type KeyProps = { keyConfig: IkeyConfig }

export const Key = (props: KeyProps) => {
  const { keyConfig } = props
  const [keyDownPosition, setKeyDownPosition] = useState<number>(0)

  useFrame(() => {
    keyDownPosition < 0 &&
      setKeyDownPosition((prev) => prev + KEY_DOWN_DURATION)
  })

  return (
    <group
      onClick={(evt) => {
        evt.stopPropagation()
        setKeyDownPosition(KEY_DOWN_POSITION)
      }}
      position={[0, keyDownPosition, 0]}
    >
      <KeyCap
        config={keyConfig}
        position={[keyConfig.column, 0, keyConfig.row]}
      />
      <KeyLegend
        config={keyConfig.legend}
        keyPosition={{ row: keyConfig.row, column: keyConfig.column }}
      />
    </group>
  )
}
