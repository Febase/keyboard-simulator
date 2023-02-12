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
    color: '#BFACE2',
    legend: { text: 'A', color: '#645CBB' },
  },
  {
    row: 0,
    column: 1,
    rowSpan: 1,
    colSpan: 1,
    color: '#FFF2F2',
    legend: { text: 'S', color: '#7286D3' },
  },
  { row: 1, column: 0, rowSpan: 1, colSpan: 2, color: '#F0EEED' },
  { row: 0, column: 2, rowSpan: 1, colSpan: 2, color: '#F0EEED' },
  {
    row: 1,
    column: 2,
    rowSpan: 1,
    colSpan: 2,
    color: '#F9F5E7',
    legend: { text: 'ENTER', color: '#A7727D' },
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
