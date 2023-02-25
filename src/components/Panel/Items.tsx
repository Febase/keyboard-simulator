import { useState } from 'react'
import styled from '@emotion/styled'
import { ReactComponent as PlusIcon } from '../../res/plus.svg'
import PlayButton from './PlayButton'

export default function Items() {
  const [data, setData] = useState<string[]>([])

  const onButtonClick = () => setData([...data, ''])

  return (
    <>
      {data.map((value, index) => (
        <Item key={index} text={value} />
      ))}
      <AddButton onClick={onButtonClick} />
    </>
  )
}

interface IItemProps {
  text: string
}

function Item({ text }: IItemProps) {
  const [value, setValue] = useState<string>(text)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const play = () => {
    setIsPlaying(true)

    let index = 0
    const textArray = value.split('')
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
        setIntervalId(null)
      }
    }, 200)

    setIntervalId(id)
  }

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId)

      setIntervalId(null)
      setIsPlaying(false)

      document.dispatchEvent(
        new CustomEvent('threekeyboardevent', {
          detail: {
            keyId: null,
          },
        }),
      )
    }
  }

  return (
    <ItemContainer>
      <Editor
        type="text"
        value={value}
        placeholder="plz enter text"
        onChange={(e) => {
          const text = e.target.value
          const regex = /^[a-zA-Z1-9`~!@#$%^&*()_+\s]*$/

          text.match(regex) && setValue(text)
        }}
      />
      {<PlayButton isPlaying={isPlaying} onClick={isPlaying ? stop : play} />}
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`

const Editor = styled.input`
  height: 1.5rem;
  border: none;
  outline: none;
`

interface IAddButtonProps {
  onClick: () => void
}

function AddButton({ onClick }: IAddButtonProps) {
  return (
    <Button>
      <PlusIcon fill="#ffffff" onClick={onClick} />
    </Button>
  )
}

const Button = styled.div`
  background: #cd5888;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #913175;
  }
`
