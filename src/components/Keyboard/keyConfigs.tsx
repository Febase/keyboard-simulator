import { IkeyConfig } from '../../types/KeyboardType'

const keys = ['1234567890-=', 'qwertyuiop[]', "asdfghjkl;'", 'zxcvbnm,./']

const genKeyConfigsByRow = (keysInRow: string, baseOptions: IkeyConfig) => {
  const row = baseOptions.row
  keysInRow.split('').map((key, idx) => {
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

export const keyConfigs: IkeyConfig[] = []
keys.map((keysInRow, idx) =>
  genKeyConfigsByRow(keysInRow, {
    row: idx,
    column: 0,
    rowSpan: 0,
    colSpan: 0,
    color: '#332C39',
  }),
)
