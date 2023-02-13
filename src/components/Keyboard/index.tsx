import { Vector3 } from '@react-three/fiber'
import React, { useRef } from 'react'
import { IkeyConfig } from '../../types/KeyboardType'
import Key from './Key'

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
