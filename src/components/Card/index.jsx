import React from 'react';

import { Container } from './styles'

function Card(props) {
  return (
    <Container>
      <img src={props.image} alt=""/>
      <p>Lorem ipsum dolor sit</p>
      <strong>R$ <span>50,00</span></strong>
    </Container>
  )
}

export default Card;