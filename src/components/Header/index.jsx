import React from 'react'

import Logo from '../../assets/logo.svg'
import Utils from '../../assets/utils.svg'

import { Container } from './styles'

function Header() {
  return (
    <Container>
      <img src={Logo} alt="" id="logo"/>
      <img src={Utils} alt="" id="utils"/>
    </Container>
  )
}

export default Header;