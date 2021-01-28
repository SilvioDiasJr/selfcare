import styled from 'styled-components'

export const Container = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 82px;
  padding: 0 32px 0 32px;

  //fixa a navBar
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  #logo, #utils{
    width: 93px;
  }

  @media(min-width: 768px){
    height: 94px;
    padding: 0 69px 0 69px;

    #logo, #utils{
      width: 120px;
    }
  }
  
`