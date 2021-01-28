import React from 'react';

import BannerPng from '../assets/banner.png'
import Product1 from '../assets/product/product1.jpg'
import Product2 from '../assets/product/product2.jpg'
import Product3 from '../assets/product/product3.jpg'
import Product4 from '../assets/product/product4.jpg'
import Product5 from '../assets/product/product5.jpg'
import Product6 from '../assets/product/product6.jpg'
import Product7 from '../assets/product/product7.jpg'
import Product8 from '../assets/product/product8.jpg'
import Product9 from '../assets/product/product9.jpg'
import Card from '../components/Card'

import { Container, Banner, Title, Content } from './styles';

function LandingPage() {
  return (
    <Container>
      <Banner src={BannerPng} alt="" />
      <Title>
        <h1>PROMOÇÃO</h1>
        <p>9 produtos</p>
      </Title>

      <Content>
        <Card image={Product1} />
        <Card image={Product2} />
        <Card image={Product3} /> 
        <Card image={Product4} /> 
        <Card image={Product5} /> 
        <Card image={Product6} /> 
        <Card image={Product7} /> 
        <Card image={Product8} /> 
        <Card image={Product9} /> 
      </Content>
    </Container>
  )
}

export default LandingPage;