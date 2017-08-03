import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {getCards} from 'store/selectors'

import Board from 'components/Board'
import Card from 'components/Card'

App.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      found: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
}

function App(props) {
  return (
    <Board>
      {renderCards(props.cards)}
    </Board>
  )
}

const renderCards = cards =>
  cards.map(({color, id, selected, found}) =>
    <Card color={color} id={id} selected={selected} found={found} key={id} />
  )

const mapStateToProps = state => ({
  cards: getCards(state)
})

export default connect(mapStateToProps)(App)
