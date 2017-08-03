import {BOARD_SIZE, CARD_COLORS} from 'utils/config'
import {getNewCard, getPlayeableBoard} from 'utils/helpers'
import {
  RESET_GAME,
  FLIP_CARD_UP,
  FLIP_CARDS_DOWN,
  MARK_CARD_FOUND
} from './actions'

const boardReducer = (
  state = {cards: getPlayeableBoard(BOARD_SIZE, CARD_COLORS)},
  action
) => {
  const {cards} = state

  switch (action.type) {
    case RESET_GAME:
      return {
        cards: getPlayeableBoard(BOARD_SIZE, CARD_COLORS)
      }

    case FLIP_CARD_UP:
    case MARK_CARD_FOUND:
      return {
        ...state,
        cards: cards.map(card => {
          if (card.id !== action.id) return card
          return cardReducer(card, action)
        })
      }

    case FLIP_CARDS_DOWN:
      return {
        ...state,
        cards: cards.map(card => cardReducer(card, action))
      }

    default:
      return state
  }
}

const cardReducer = (state = getNewCard(), action) => {
  switch (action.type) {
    case FLIP_CARD_UP:
      return {
        ...state,
        selected: true
      }
    case FLIP_CARDS_DOWN:
      return {
        ...state,
        selected: false
      }
    case MARK_CARD_FOUND:
      return {
        ...state,
        selected: false,
        found: true
      }

    default:
      return state
  }
}

export default boardReducer
