import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Banner = styled.img`
  width: 100%;
  height: 221px;
  object-fit: cover;

  @media(min-width: 768px){
    height: 375px;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  padding: 0 32px 0 32px;
  border-bottom: #A5A1A1 1px solid;

  h1{
    font-size: 16px;
  }

  p{
    font-size: 17px;
  }

  @media(min-width: 768px){
    height: 85px;
    padding: 0 69px 0 69px;

    h1{
      font-size: 20px;
    }

    P{
      font-size: 18px;
    }
  }
`

export const Content = styled.div`
margin: 28px 32px 0 32px;
  
display: flex;
justify-content: space-between;
flex-wrap:wrap;

@media(min-width: 768px){
  margin: 57px 71px 0 71px;
}
`