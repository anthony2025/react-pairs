import {filter} from 'lodash' // TODO: cherrypick by folder

export const numberOfCardsSelected = state =>
  filter(state.cards, {selected: true}).length

export const lastCardSelected = state =>
  filter(state.cards, {selected: true})[0]

export const getCards = state => state.cards
