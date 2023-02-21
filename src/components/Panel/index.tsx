import styled from '@emotion/styled'

export default function Panel() {
  return (
    <PanelContainer id="panel">
      <PanelTitle>
        <h1>Keyboard Simulator</h1>
      </PanelTitle>
    </PanelContainer>
  )
}

const PanelContainer = styled.div`
  background-color: #e9e8e8;
  width: 20vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
`

const PanelTitle = styled.div`
  font-family: sans-serif;
  color: #20262e;
`
