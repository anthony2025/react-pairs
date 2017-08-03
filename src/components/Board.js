import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

BoardContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default function BoardContainer(props) {
  return (
    <Wrapper>
      <Board>
        {props.children}
      </Board>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Board = styled.div`
  height: 90vh;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  & > * {
    min-height: 100px;
  }
`
