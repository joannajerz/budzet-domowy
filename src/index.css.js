import {createGlobalStyle} from 'styled-components';
import { normalize } from 'styled-normalize';



export default createGlobalStyle`
${normalize}

  ul{
    list-style:none;
    margin: 0px;
    padding:0px;
    li + li {
      margin-left: ${({theme})=>theme.spacing.xs}px;
    }
  }
`