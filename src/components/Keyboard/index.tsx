import { Vector3, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import KeyCap from './Key/KeyCap'
import KeyLegend from './Key/KeyLegend'
import { IkeyConfig } from '../../types/KeyboardType'

const keyConfigs: IkeyConfig[] = [
  {
    row: 0,
    column: 0,
    rowSpan: 1,
    colSpan: 1,
    color: '#6096B4',
    legend: { text: 'A', color: '#93BFCF' },
  },
  {
    row: 0,
    column: 1,
    rowSpan: 1,
    colSpan: 1,
    color: '#F0EEED',
    legend: { text: 'S', color: '#332C39' },
  },
  { row: 1, column: 0, rowSpan: 1, colSpan: 2, color: '#FFFFFF' },
  { row: 0, column: 2, rowSpan: 1, colSpan: 2, color: '#000000' },
  {
    row: 1,
    column: 2,
    rowSpan: 1,
    colSpan: 2,
    color: '#EFA3C8',
    legend: { text: 'ENTER', color: '#0F6292' },
  },
]

interface IKeyboardProps {
  position: Vector3
}

const KEY_DOWN_POSITION = -0.5
const KEY_DOWN_DURATION = 0.02

type KeyProps = { keyConfig: IkeyConfig }
const Key = (props: KeyProps) => {
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
