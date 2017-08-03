import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {playerClickedCard} from 'store/actions'
import {CARD_BACK_COLOR} from 'utils/config'

Card.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  found: PropTypes.bool.isRequired
}

function Card(props) {
  return (
    <StyledCard
      // If performance becomes an issue, look in this binding first
      onClick={e => props.clickHandler({...props})}
      {...props}
    />
  )
}

const StyledCard = styled.button`
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: .5s;
  background: ${props => {
    if (props.found) return 'inherit'
    if (props.selected) return props.color
    return CARD_BACK_COLOR
  }};
`

const mapDispatchToProps = {
  clickHandler: playerClickedCard
}

export default connect(null, mapDispatchToProps)(Card)
