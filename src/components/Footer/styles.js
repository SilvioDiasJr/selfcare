import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  height: 442px;
  background-color: #F9F9F9;
  display: flex;
  flex-direction: column;
  border-top: 0.2px solid #A5A1A1;
  font-size: 14px;
  font-weight: 600;

  position: relative;
  bottom:0;

  @media(min-width: 768px){
    height: 348px;
    font-size: 20px;
    line-height: 24px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 361px;
  display: flex;
  flex-direction: column;
  padding: 35px 32px;

  @media(min-width: 760px){
    flex-direction: row;
    justify-content: space-between;
    height: 216px;
    padding: 40px 69px 0 69px;
  }
`

export const Title = styled.div `
  display: flex;
  flex-direction: column;
  margin-bottom: 41px;
  
  a{
    line-height: 16.8px;
    padding-bottom: 13px;
    text-decoration: none;
    color: #161616;
    transition: 0.3s all;

    &:hover{
      color: blue;
    }
  }

  @media(min-width: 768px){
    width: 100%;
  }
`

export const NewsLetter = styled.form `
  display: flex;
  flex-direction: column;

  label{
    padding-bottom: 17px;
    line-height: 17px;
  }
  @media(min-width: 768px){
    label{
      padding-bottom: 18px;
      line-height: 24px;
    }
  }
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  

  input{
    width: 100%;
    height: 43px;
    padding: 10px;
    line-height: 19px;
    border: 0.4px solid #D9D9D9;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 600;
  }

  button{
    margin: 17px 0 42px;
    max-width: 100%;
    height: 43px;
    background: #5CA720;
    border: none;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    line-height: 19.2px;
    transition: 0.3s ease-in-out;

    &:hover{
      opacity: 0.7;
    }
  }

  @media(min-width: 768px){
    flex-direction: row;
    max-width: 100%;
    
    button{
      width: 152px;
      height: 54px;
      margin: 0;
      border-radius: 0 3px 3px 0;
      font-size: 20px;
      line-height: 24px;
    }

    input{
      width: 397px;
      height: 54px;
      border-radius: 3px 0 0 3px;
      font-size: 20px;
      line-height: 24px;
    }
  }
`

export const Pay = styled.div `
  width: 100%;
  height: 81px;
  border-top: 0.2px solid #A5A1A1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px 0 32px;

  @media(min-width: 768px){
    height: 132px;
    padding: 0px 69px 0 69px;

    img{
      width: 44px;
    }
  }
`

export const Social = styled.div `

  img{
    padding-right: 14px;
  }
`

export const Payment = styled.div `
  display: flex;
  align-items: center;

  img{
    padding-left: 14px;
  }
`