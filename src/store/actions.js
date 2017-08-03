import {delay} from 'lodash' // TODO: cherrypick by folder
import {FLIP_DELAY} from 'utils/config'
import {numberOfCardsSelected, lastCardSelected} from './selectors'

export const RESET_GAME = 'RESET_GAME'
export const FLIP_CARD_UP = 'FLIP_CARD_UP'
export const FLIP_CARDS_DOWN = 'FLIP_CARDS_DOWN'
export const MARK_CARD_FOUND = 'MARK_CARD_FOUND'

export const resetGame = () => ({type: RESET_GAME})
export const flipCardUp = id => ({type: FLIP_CARD_UP, id})
export const flipCardsDown = () => ({type: FLIP_CARDS_DOWN})
export const markCardFound = id => ({type: MARK_CARD_FOUND, id})

export const playerClickedCard = currentCard => (dispatch, getState) => {
  const state = getState()
  const lastCard = lastCardSelected(state)
  if (currentCard.found) return

  switch (numberOfCardsSelected(state)) {
    case 0:
      return dispatch(flipCardUp(currentCard.id))

    case 1:
      dispatch(flipCardUp(currentCard.id))
      if (
        lastCard.color === currentCard.color &&
        lastCard.id !== currentCard.id
      ) {
        dispatch(markCardFound(currentCard.id))
        return dispatch(markCardFound(lastCard.id))
      } else {
        return delay(() => dispatch(flipCardsDown()), FLIP_DELAY)
      }

    default:
      return dispatch(flipCardsDown())
  }
}
