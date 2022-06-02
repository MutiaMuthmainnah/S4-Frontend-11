
import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  // PROPS VARIANT
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

font-size: ${(size) => {
        if(size === "sm"){
            return "0.8rem";
        }
        else if(size === "df"){
            return "1rem";
        }
        else if(size === "lg"){
            return "1.3rem";
        }
        else{
            return "0.8rem";
        }
    }};

    padding: ${(size) => {
        if(size === "sm"){
            return "0.2rem 0.5rem";
        }
        else if(size === "df"){
            return "0.5rem 1rem";
        }
        else if(size === "lg"){
            return "0.5rem 1rem";
        }
        else{
            return "0.2rem 0.5rem";
        }
    }}

  // PROPS FULL
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
    
  // PROPS SIZE
`; 

export default Button;
