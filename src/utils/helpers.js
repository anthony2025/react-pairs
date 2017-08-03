import {sample, shuffle, times} from 'lodash' // TODO: cherrypick by folder
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
  const newBoard = []

  // TODO: maybe change to while loop
  times(size, () => {
    if (newBoard.length + 1 > size) return
    newBoard.push(getNewCard(), getNewCard())
  })

  return shuffle(newBoard)
}

export const getUniformBoard = (size, colors) => {
  const newBoard = Array(size)
  const boardColor = sample(colors)
  const newCard = getNewCard(boardColor)
  return newBoard.fill(newCard)
}
