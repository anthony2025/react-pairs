import {numberOfCardsSelected, lastCardSelected} from './selectors'

export const RESET_GAME = 'RESET_GAME'
export const FLIP_CARD_UP = 'FLIP_CARD_UP'
export const FLIP_CARDS_DOWN = 'FLIP_CARDS_DOWN'
export const MARK_CARD_FOUND = 'MARK_CARD_FOUND'

export const resetGame = () => ({type: RESET_GAME})

export const playerClickedCard = card => (dispatch, getState) => {
  const state = getState()
  console.log('the card pressed was: ', card.id)
  console.log('selected #: ', numberOfCardsSelected(state))
  console.log('selected #: ', lastCardSelected(state))
  if (numberOfCardsSelected(state) >= 2) dispatch({type: FLIP_CARDS_DOWN})
  dispatch({type: FLIP_CARD_UP, id: card.id})
}
