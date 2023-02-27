import { ThreeEvent, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import KeyCap from './KeyCap'
import KeyLegend from './KeyLegend'
import { IkeyConfig } from '../../../types/KeyboardType'
import { KEY_DOWN_DURATION, KEY_DOWN_POSITION } from './consts'
import { Howl } from 'howler'
import { ThreeEventType } from '../../../types/ThreeEvent'

type KeyProps = { keyConfig: IkeyConfig }

export default (props: KeyProps) => {
  const { keyConfig } = props
  const [keyDownPosition, setKeyDownPosition] = useState<number>(0)
  const howl = useRef<Howl>(new Howl({ src: 'sample_audio.ogg' }))

  useEffect(() => {
    document.addEventListener('threekeyboardevent', keyboardEventHander)

    return () => {
      document.removeEventListener('threekeyboardevent', keyboardEventHander)
    }
  }, [])

  useFrame(() => {
    keyDownPosition < 0 &&
      setKeyDownPosition((prev) => prev + KEY_DOWN_DURATION)
  })

  const onKeyClick = (evt?: ThreeEvent<MouseEvent>) => {
    evt?.stopPropagation()
    setKeyDownPosition(KEY_DOWN_POSITION)
    howl.current?.play()
  }

  const keyboardEventHander = (evt: CustomEvent<ThreeEventType>) => {
    if (evt.detail?.keyId === keyConfig.legend?.text.toLowerCase()) onKeyClick()
  }

  return (
    <group position={[0, keyDownPosition, 0]} rotation={[Math.PI / 36, 0, 0]}>
      <KeyCap
        config={keyConfig}
        position={[keyConfig.column, 0, keyConfig.row]}
      />
      <KeyLegend
        config={keyConfig.legend}
        keyPosition={{ row: keyConfig.row, column: keyConfig.column }}
      />
    </group>
  )
}

export const genCustomKeyEventFromCharacter = (
  char: string,
): CustomEvent<ThreeEventType> => {
  if (char.length !== 1) {
    throw new Error(
      `Invalid input for custom key event. Input should be single charater. Input is ${char}, though.`,
    )
  }

  return new CustomEvent<ThreeEventType>('threekeyboardevent', {
    detail: { keyId: char.toLowerCase() },
  })
}
