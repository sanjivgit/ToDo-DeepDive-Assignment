import styled, { css } from "styled-components"

export const StyledButton = styled.button`
width: ${props => props.width ? props.width : 411}px;
height: ${props => props.height ? props.height : 54.173}px;
flex-shrink: 0;
border-radius: 8px;
font-size: ${props => props.fontSize ? props.fontSize : 20}px;
font-weight: ${props => props.fontWeight ? props.fontWeight : 700}px;
color: ${props => props.color ? props.color : "FFF"};
background:${props => props.backgroundColor ? props.backgroundColor : '#2ECA34'};
box-shadow: 0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12);

${props => props.disabled && css`
opacity: 0.7;
cursor: not-allowed;
`}
`