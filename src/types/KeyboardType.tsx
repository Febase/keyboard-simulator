import { Color } from '@react-three/fiber'

export interface IKeyLegend {
  text: string
  color: Color
}

export interface IkeyConfig {
  row: number
  column: number
  rowSpan: number
  colSpan: number
  color: Color
  legend?: IKeyLegend
}
