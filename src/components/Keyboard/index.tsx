import { Vector3 } from '@react-three/fiber'
import KeyCap from './Key/KeyCap'

const keyConfigs = [
  { row: 0, column: 0, colSpan: 1, rowSpan: 1, color: '#BFACE2' },
  { row: 0, column: 1, colSpan: 1, rowSpan: 1, color: '#FFF2F2' },
  { row: 1, column: 0, colSpan: 1, rowSpan: 2, color: '#FFEEED' },
]

interface IKeyboardProps {
  position: Vector3
}

export default ({ position }: IKeyboardProps) => {
  return (
    <group position={position}>
      {keyConfigs.map((keyConfig) => (
        <KeyCap
          config={keyConfig}
          position={[keyConfig.column, 0, keyConfig.row]}
        />
      ))}
    </group>
  )
}
