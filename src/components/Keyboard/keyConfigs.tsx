import { IkeyConfig } from '../../types/KeyboardType'
import { specialKeyConfigs } from './specialKeyConfigs'
export const keyConfigs: IkeyConfig[] = []

const keys = ['`1234567890-=', ' qwertyuiop[]', " asdfghjkl;'", ' zxcvbnm,./']

const genKeyConfigsByRow = (
  keysInRow: string,
  baseOptions: IkeyConfig,
): void => {
  const row = baseOptions.row
  keysInRow.split('').map((key, idx) => {
    if (key === ' ') return
    keyConfigs.push({
      row: row,
      column: idx + baseOptions.column,
      rowSpan: 1,
      colSpan: 1,
      color: baseOptions.color,
      legend: {
        text: key,
        color: baseOptions.color,
      },
    })
  })
}

keys.map((keysInRow, idx) =>
  genKeyConfigsByRow(keysInRow, {
    row: idx,
    column: idx * 0.5,
    rowSpan: 0,
    colSpan: 0,
    color: '#332C39',
  }),
)

specialKeyConfigs.forEach((config) => keyConfigs.push(config))
