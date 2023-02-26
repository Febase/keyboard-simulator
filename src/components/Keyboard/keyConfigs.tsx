import { IkeyConfig } from '../../types/KeyboardType'
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

const specialKeys: IkeyConfig[] = [
  {
    row: 0,
    column: 13,
    rowSpan: 1,
    colSpan: 2,
    color: '#332C39',
    legend: {
      text: 'Backspace',
      color: '#332C39',
    },
  },
  {
    row: 1,
    column: 0,
    rowSpan: 1,
    colSpan: 1.5,
    color: '#332C39',
    legend: {
      text: 'Tab',
      color: '#332C39',
    },
  },
  {
    row: 1,
    column: 13.5,
    rowSpan: 1,
    colSpan: 1.5,
    color: '#332C39',
    legend: {
      text: '\\',
      color: '#332C39',
    },
  },
  {
    row: 2,
    column: 0,
    rowSpan: 1,
    colSpan: 2,
    color: '#332C39',
    legend: {
      text: 'Caps lock',
      color: '#332C39',
    },
  },
  {
    row: 2,
    column: 13,
    rowSpan: 1,
    colSpan: 2,
    color: '#332C39',
    legend: {
      text: 'Enter',
      color: '#332C39',
    },
  },
  {
    row: 3,
    column: 0,
    rowSpan: 1,
    colSpan: 2.5,
    color: '#332C39',
    legend: {
      text: 'Shift',
      color: '#332C39',
    },
  },
  {
    row: 3,
    column: 12.5,
    rowSpan: 1,
    colSpan: 2.5,
    color: '#332C39',
    legend: {
      text: 'Shift',
      color: '#332C39',
    },
  },
  {
    row: 4,
    column: 0,
    rowSpan: 1,
    colSpan: 1.3,
    color: '#332C39',
    legend: {
      text: 'Ctrl',
      color: '#332C39',
    },
  },
  {
    row: 4,
    column: 1.3,
    rowSpan: 1,
    colSpan: 1.3,
    color: '#332C39',
    legend: {
      text: 'Opt',
      color: '#332C39',
    },
  },
  {
    row: 4,
    column: 2.6,
    rowSpan: 1,
    colSpan: 1.3,
    color: '#332C39',
    legend: {
      text: 'Cmd',
      color: '#332C39',
    },
  },
  {
    row: 4,
    column: 3.9,
    rowSpan: 1,
    colSpan: 7.1,
    color: '#332C39',
    legend: {
      text: ' ',
      color: '#332C39',
    },
  },
  {
    row: 4,
    column: 11,
    rowSpan: 1,
    colSpan: 1.3,
    color: '#332C39',
    legend: {
      text: 'Cmd',
      color: '#332C39',
    },
  },
  {
    row: 4,
    column: 12.3,
    rowSpan: 1,
    colSpan: 1.3,
    color: '#332C39',
    legend: {
      text: 'Opt',
      color: '#332C39',
    },
  },
  {
    row: 4,
    column: 13.6,
    rowSpan: 1,
    colSpan: 1.4,
    color: '#332C39',
    legend: {
      text: 'Ctrl',
      color: '#332C39',
    },
  },
]

specialKeys.forEach((config) => keyConfigs.push(config))
