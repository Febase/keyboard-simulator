import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useState } from 'react'
import Items from './Items'
import { buttonStyle } from './styles'
import { ReactComponent as OpenIcon } from '../../res/open.svg'
import { ReactComponent as CloseIcon } from '../../res/close.svg'

interface IOpenButton {
  open: boolean
  onClick: () => void
}

function OpenButton({ open, onClick }: IOpenButton) {
  return (
    <Button>
      {open ? (
        <CloseIcon onClick={onClick} fill="#ffffff" />
      ) : (
        <OpenIcon onClick={onClick} fill="#ffffff" />
      )}
    </Button>
  )
}

const Button = styled.div`
  ${buttonStyle}
  background: #393e46;
  border-radius: 50%;
  margin: 0.5rem;
  &:hover {
    background: #d65a31;
  }
`

export default function Panel() {
  const [isOpen, setIsOpen] = useState(false)

  const openButtonClicked = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container open={isOpen}>
      <OpenButton open={isOpen} onClick={openButtonClicked} />
      <PanelContainer>
        <Title>
          <h1>Keyboard Simulator</h1>
        </Title>
        <Items />
      </PanelContainer>
    </Container>
  )
}

const PanelContainer = styled.div`
  background-color: #333333;
  width: 20vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Title = styled.div`
  font-family: sans-serif;
  color: #ffffff;
`

const Container = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  right: -20vw;
  transition: all ease 1s;
  transform: ${(props) =>
    props.open
      ? css`translate3D(-20vw, 0, 0)`
      : css`
          transform: translate3D(20vw, 0, 0);
        `};
`
