import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
   
    html{
        font-size: 62.5%;
        height: 100%;
        font-family:  "Poppins";
    }

    :root{
        --primary-white: #fff;
        --secondary-white: #dedede;
    }

    h1,h2,h3,h4,p,li,footer{
        user-select: none;
    }
    img{
        width: 50rem;
    }

`;
