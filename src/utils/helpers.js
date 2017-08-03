import {sample, shuffle} from 'lodash' // TODO: cherrypick by folder
import {CARD_COLORS} from 'utils/config'
import {generate} from 'shortid'

export const getNewCard = (
  color = sample(CARD_COLORS),
  id = generate(),
  selected = false,
  found = false
) => ({
  id,
  color,
  selected,
  found
})

export const getPlayeableBoard = (size, colors) => {
  if (size % 2 !== 0) alert('ERROR! board size is not an even integer')
  const board = []
  while (board.length + 2 <= size) {
    let randomColor = sample(colors)
    board.push(getNewCard(randomColor), getNewCard(randomColor))
  }
  return shuffle(board)
}

export const getUniformBoard = (size, colors) => {
  const board = Array(size)
  const boardColor = sample(colors)
  const card = getNewCard(boardColor)
  return board.fill(card)
}
