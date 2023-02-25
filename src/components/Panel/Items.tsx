import { useState } from 'react'
import styled from '@emotion/styled'
import PlayButton from './PlayButton'
import { buttonStyle } from './styles'
import { ReactComponent as PlusIcon } from '../../res/plus.svg'

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
      <PlayButton />
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
      <PlusIcon onClick={onClick} />
    </Button>
  )
}

const Button = styled.div`
  ${buttonStyle}
  background: #eeeeee;
  border-radius: 50%;
  &:hover {
    background: #d65a31;
  }
`
