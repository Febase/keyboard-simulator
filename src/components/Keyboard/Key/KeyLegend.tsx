import { IKeyLegend } from '../../../types/KeyboardType'
import { DIFF_WIDTH, DIFF_DEPTH_TOP, HEIGHT } from './consts'
import { Vector3 } from 'three'

interface IKeyLegendProps {
  keyPosition: {
    row: number
    column: number
  }
  config?: IKeyLegend
}

const createCanvas = ({ text, color }: IKeyLegend) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (context) {
    context.font = 'Bold 60px system-ui'
    context.fillStyle = color.toString()
    context.fillText(text, 0, 40)
    context.imageSmoothingQuality = 'high'
  }

  return canvas
}

export default (config: IKeyLegendProps) => {
  const { keyPosition, config: legendConfig } = config

  if (!legendConfig) return <></>

  const textureCanvas = createCanvas(legendConfig)
  const { column, row } = keyPosition
  const legendPosition = new Vector3(
    column + 0.5 + DIFF_WIDTH * 2,
    HEIGHT,
    row + 0.5 + DIFF_DEPTH_TOP * 2,
  )

  return (
    <mesh position={legendPosition} rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry attach="geometry" args={[1, 1]} />
      <meshStandardMaterial
        transparent={true}
        polygonOffset={true}
        polygonOffsetFactor={-1}
      >
        <canvasTexture
          attach="map"
          image={textureCanvas}
          onUpdate={(s) => (s.needsUpdate = true)}
        />
      </meshStandardMaterial>
    </mesh>
  )
}
