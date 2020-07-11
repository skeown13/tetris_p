import { useState } from 'react'

import { randomTetromino } from '../tetrominos'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  }) 
    //line above is short for (We are using ES6 destructuring above)
    // const playerState = useState()
    // const player = playerState[0]
    // const setPlayer = playerState[1]

  return [player]
}