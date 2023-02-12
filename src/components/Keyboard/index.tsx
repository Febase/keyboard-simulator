import { Vector3 } from '@react-three/fiber'
import React from 'react'
import KeyCap from './Key/KeyCap'
import KeyLegend from './Key/KeyLegend'

const keyConfigs = [
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
      {keyConfigs.map((keyConfig) => (
        <React.Fragment key={`${keyConfig.row}-${keyConfig.column}`}>
          <KeyCap
            config={keyConfig}
            position={[keyConfig.column, 0, keyConfig.row]}
          />
          <KeyLegend
            config={keyConfig.legend}
            keyPosition={{ row: keyConfig.row, column: keyConfig.column }}
          />
        </React.Fragment>
      ))}
    </group>
  )
}
