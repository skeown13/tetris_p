import React, { useState } from 'react'

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris'

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

// Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {

  console.log("re-render")
  
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