import styled from '@emotion/styled'
import { ReactComponent as PlayIcon } from '../../res/play.svg'
import { ReactComponent as StopIcon } from '../../res/stop.svg'

interface IPlayButtonProps {
  isPlaying: boolean
  onClick: () => void
}

export default function PlayButton({ isPlaying, onClick }: IPlayButtonProps) {
  return (
    <Button role="button">
      {isPlaying ? (
        <StopIcon onClick={onClick} />
      ) : (
        <PlayIcon fill="#913175" onClick={onClick} />
      )}
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
  overflow: hidden;
`
