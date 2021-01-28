import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    max-width: 1440px;
    min-height: 100%;
  }
  
  body{
    background: #fff;
    font-size: 14px;
    -webkit-font-smoothing: antialised !important;
  }

  body, imput, button{
    color: #161616;
    font-size: 14px;
    font-family: Lato, sans-serif;
  }

  button{
    cursor: pointer;
  }

`