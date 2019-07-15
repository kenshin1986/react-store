import styled from 'styled-components'

export const ButtonContainer2 = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
border-color: ${props =>
     props.cart ? "var(--mainYellow)" : "var(--mainWhite)"};
color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--mainWhite)"};
border-radius: 0.1rem;
cursor:pointer;
margin:0rem 0rem 0rem 0;
padding: 0rem 0rem 0rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background: ${prop =>  
    prop.cart ? "var(--mainYellow)" : "var(--mainWhite)"};
    color: var(--mainBlue);
}
&:focus {
    outline: none;
}
`;