import { Vector3 } from '@react-three/fiber'
import { IkeyConfig } from '../../../types/KeyboardType'
import {
  DIFF_WIDTH,
  DIFF_DEPTH_TOP,
  DIFF_DEPTH_BOTTOM,
  TOP_WIDTH_INSET,
  TOP_DEPTH_INSET,
  HEIGHT,
} from './consts'

const createVertices = (width: number, depth: number) => {
  const positionBottomRect = [
    [0, 0, 0],
    [width, 0, 0],
    [0, 0, depth],
    [width, 0, depth],
  ]

  const positionTopOctagon = [
    [width / 2, HEIGHT, depth / 2], // center
    [DIFF_WIDTH + TOP_WIDTH_INSET, HEIGHT, DIFF_DEPTH_TOP],
    [width - DIFF_WIDTH - TOP_WIDTH_INSET, HEIGHT, DIFF_DEPTH_TOP],
    [DIFF_WIDTH, HEIGHT, DIFF_DEPTH_TOP + TOP_DEPTH_INSET],
    [width - DIFF_WIDTH, HEIGHT, DIFF_DEPTH_TOP + TOP_DEPTH_INSET],
    [DIFF_WIDTH, HEIGHT, depth - DIFF_DEPTH_BOTTOM - TOP_DEPTH_INSET],
    [width - DIFF_WIDTH, HEIGHT, depth - DIFF_DEPTH_BOTTOM - TOP_DEPTH_INSET],
    [DIFF_WIDTH + TOP_WIDTH_INSET, HEIGHT, depth - DIFF_DEPTH_BOTTOM],
    [width - DIFF_WIDTH - TOP_WIDTH_INSET, HEIGHT, depth - DIFF_DEPTH_BOTTOM],
  ]

  return new Float32Array([
    // 윗면1
    ...positionTopOctagon[0],
    ...positionTopOctagon[2],
    ...positionTopOctagon[1],

    // 윗면2
    ...positionTopOctagon[0],
    ...positionTopOctagon[1],
    ...positionTopOctagon[3],

    // 윗면3
    ...positionTopOctagon[0],
    ...positionTopOctagon[4],
    ...positionTopOctagon[2],

    // 윗면4
    ...positionTopOctagon[0],
    ...positionTopOctagon[3],
    ...positionTopOctagon[5],

    // 윗면5
    ...positionTopOctagon[0],
    ...positionTopOctagon[6],
    ...positionTopOctagon[4],

    // 윗면6
    ...positionTopOctagon[0],
    ...positionTopOctagon[5],
    ...positionTopOctagon[7],

    // 윗면7
    ...positionTopOctagon[0],
    ...positionTopOctagon[8],
    ...positionTopOctagon[6],

    // 윗면8
    ...positionTopOctagon[0],
    ...positionTopOctagon[7],
    ...positionTopOctagon[8],

    // 옆면 코너 1
    ...positionTopOctagon[3],
    ...positionTopOctagon[1],
    ...positionBottomRect[0],

    // 옆면 코너 2
    ...positionBottomRect[1],
    ...positionTopOctagon[2],
    ...positionTopOctagon[4],

    // 옆면 코너 3
    ...positionTopOctagon[5],
    ...positionBottomRect[2],
    ...positionTopOctagon[7],

    // 옆면 코너 4
    ...positionTopOctagon[6],
    ...positionTopOctagon[8],
    ...positionBottomRect[3],

    // 옆면 1 - 1
    ...positionBottomRect[0],
    ...positionTopOctagon[1],
    ...positionTopOctagon[2],

    // 옆면 1 - 2
    ...positionBottomRect[0],
    ...positionTopOctagon[2],
    ...positionBottomRect[1],

    // 옆면 2 - 1
    ...positionBottomRect[0],
    ...positionTopOctagon[5],
    ...positionTopOctagon[3],

    // 옆면 2 - 2
    ...positionBottomRect[0],
    ...positionBottomRect[2],
    ...positionTopOctagon[5],

    // 옆면 3 - 1
    ...positionBottomRect[1],
    ...positionTopOctagon[4],
    ...positionTopOctagon[6],

    // 옆면 3 - 2
    ...positionBottomRect[1],
    ...positionTopOctagon[6],
    ...positionBottomRect[3],

    // 옆면 4 - 1
    ...positionBottomRect[2],
    ...positionTopOctagon[8],
    ...positionTopOctagon[7],

    // 옆면 4 - 2
    ...positionBottomRect[2],
    ...positionBottomRect[3],
    ...positionTopOctagon[8],
  ])
}

interface IKeyCapProps {
  config: IkeyConfig
  position: Vector3
}

export default ({ config, position }: IKeyCapProps) => {
  const { rowSpan, colSpan, color } = config
  const vertices = createVertices(colSpan, rowSpan)

  return (
    <mesh position={position}>
      <bufferGeometry
        attach="geometry"
        onUpdate={(self) => self.computeVertexNormals()}
      >
        <bufferAttribute
          attach="attributes-position"
          array={vertices}
          count={vertices.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}
