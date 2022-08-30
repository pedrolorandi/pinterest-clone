import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

    body{
        font-family: 'Open Sans', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    img{
        max-width: 100%;
        height: auto;
    }

    button{
        border: none;
    }
`