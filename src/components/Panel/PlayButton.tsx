import styled from '@emotion/styled'
import { ReactComponent as PlayIcon } from '../../res/play.svg'

export default function PlayButton() {
  return (
    <Button>
      <PlayIcon fill="#913175" />
    </Button>
  )
}

const Button = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
