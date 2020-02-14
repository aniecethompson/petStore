import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: .1rem solid var(--lightPurple);
border-color:${props => (props.cart ? "var(--mainPink)": "var(--lightPurple)" )};
color: ${props => (props.cart ? "var(--mainPink)": "var(--lightPurple)")};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => (props.cart ? "var(--mainPink)": "var(--lightPurple)")};
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}
`