import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    outline: 0;
    
    list-style: none;
}

button{
    cursor: pointer;
}

:root {
    --purple: #5400ae;
    --backgroundMain: #f5f5f5;
    --backgroundDarker:#ececec;
}
`;
