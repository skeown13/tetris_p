import React from 'react'

import { createStage } from './../gameHelpers'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

//Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <Stage stage={createStage()} />
      <aside>
        <StyledTetris>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </StyledTetris>
        <StartButton />
      </aside>
    </StyledTetrisWrapper>
  )
}


export default Tetris