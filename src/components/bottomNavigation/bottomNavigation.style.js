import styled from "styled-components";

export const BottonNavigationContainer = styled.div`

`

export const StyledItem = styled.div`
width: ${props => props.width ? props.width : 42}px;
height: ${props => props.height ? props.height : 41.837}px;
background-color: ${props => props.backgroundColor ? props.backgroundColor : '#8171E6'};
border-radius: 50%;
color: ${props => props.color ? props.color : '#FFF'};
margin-right: 10px;
cursor: pointer;
`