import styled from 'styled-components'

export const Container = styled.div`
  padding-bottom: 28px;

  img{
    height: 126px;
    width: 126px;
    object-fit:cover;
  }

  p, strong{
    font-size: 12px;
    font-weight: 500;
    padding: 3px 0;
  }

  span{
    font-size: 14px;
    color: #5CA720;
    font-weight: 700;
  }

  @media(min-width: 768px){
    padding-bottom: 65px;

    img{
      min-height: 303px;
      min-width: 303px;
    }

    p, strong{
      font-size: 22px;
      padding: 12px 0;
    }

    span{
      font-size: 25px;
    }

  }
`
