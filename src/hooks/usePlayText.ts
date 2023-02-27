import { useState, useRef } from 'react'

interface IUsePlayText {
  play: (text: string) => void
  stop: () => void
  isPlaying: boolean
}

const usePlayText = (): IUsePlayText => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null)

  const play = (text: string) => {
    if (text === '') {
      return
    }

    setIsPlaying(true)

    let index = 0
    const textArray = text.split('')
    const id = setInterval(() => {
      const keyId = textArray[index].toLowerCase()
      const event = new CustomEvent('threekeyboardevent', {
        detail: {
          keyId,
        },
      })
      document.dispatchEvent(event)

      index++

      if (index === textArray.length) {
        clearInterval(id)
        setIsPlaying(false)
        intervalIdRef.current = null
      }
    }, 200)

    intervalIdRef.current = id
  }

  const stop = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current)

      intervalIdRef.current = null
      setIsPlaying(false)
    }
  }

  return { play, stop, isPlaying }
}

export default usePlayText
