import styled, {css} from 'styled-components';

const Button = styled.button`
    
    width: 120px;
    height: 30px;
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    font-size: unset;
    border: 0;
    border-radius:5px;
    border: 1px solid #e3e8fb;
    cursor:pointer;
    color: rgb(79 106 207);
    font-size:14px;
    outline: none;
    text-decoration:none;
    text-shadow: 0px 0px 10px #2f6627;
    grid-area: "buttonFunc";
    transition-duration: 0.4s;
    
    :hover {
    background-color: #e3e8fb;
    outline: none;
    font-size: unset;
    border: 0;
  }
  
  :active {
    position: relative;
    top: 1px;
  }
  
   ${props => props.buttonChange && css`
    grid-area: "buttonChange";
  `} 
  
    ${props => props.feed && css`
    margin: 15px;
    -webkit-transition: all 0.5s 0s ease;
    -moz-transition: all 0.5s 0s ease;
    -o-transition: all 0.5s 0s ease;
    transition: all 0.5s 0s ease;
  `} 
  
   ${props => props.feedDelete && css`
    width: 30px;
    border-radius: 50px;
    border: 0;
    float: right;
    position: static;
  `}
`

export default Button;