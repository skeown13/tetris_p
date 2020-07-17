import React, { useState } from 'react'

import { createStage, checkCollision } from '../gameHelpers'

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
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer)

  console.log("re-render")

  const movePlayer = dir => {
    if(!checkCollision(player, stage, { x: dir, y: 0})) {
      updatePlayerPos( { x: dir, y: 0 })
    }
  }

  const startGame = () => {
    //Reset everything
    setStage(createStage())
    resetPlayer()
  }
  
  const drop = () => {
    updatePlayerPos({ x:0, y: 1, collided: false})
  }

  const dropPlayer = () => {
    drop()
  }

  const move = ({ keyCode }) => {
    if(!gameOver) {
      if(keyCode === 37) {
        movePlayer(-1)
      } else if (keyCode === 39) {
        movePlayer(1)
      } else if (keyCode === 40) {
        dropPlayer()
      }
    }
  }
  
  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <Stage stage={stage} />
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over" />
        ) : (
          <StyledTetris>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </StyledTetris>
        )}
        <StartButton callback={startGame}/>
      </aside>
    </StyledTetrisWrapper>
  )
}


export default Tetris