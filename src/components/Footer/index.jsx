import React from 'react';

import Instagran from '../../assets/icons/InstagranIcon.svg'
import Facebook from '../../assets/icons/faceIcon.svg'
import MasterCard from '../../assets/icons/masterCardIcon.svg'
import PayPal from '../../assets/icons/payPalIcon.svg'
import Visa from '../../assets/icons/visaIcon.svg'

import { Container, Title, NewsLetter, Inputs, Pay, Social, Payment, Content } from './styles';

function Footer() {
  return (
    <Container>
      <Content>
        <Title>
          <a href="#">Contato</a>
          <a href="#">Termo de serviço</a>
          <a href="#">Política de privicidade</a>
          <a href="#">Cancelamento, troca e reembolso</a>
        </Title>
        <NewsLetter>
          <label htmlFor="">Newsletter</label>
          <Inputs>
            <input
              type="email"
              name="email"
              placeholder="Digite seu melhor e-mail"
            />
            <button>Inscrever</button>
          </Inputs>
        </NewsLetter>
      </Content>
      <Pay>
        <Social>
          <img src={Instagran} alt="" />
          <img src={Facebook} alt="" />
        </Social>
        <Payment>
          <img src={MasterCard} alt="" />
          <img src={PayPal} alt="" />
          <img src={Visa} alt="" />
        </Payment>
      </Pay>
    </Container>
  )
}

export default Footer;