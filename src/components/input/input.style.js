import styled from "styled-components";

export const InputField = styled.input`
width: ${props => props.width ? props.width : 410.923}px;
height: ${props => props.height ? props.height : 50.301}px;
outline: ${props => !props.outline ? 'none' : ''};
border-radius: ${props => props.borderRadius ? props.borderRadius : 8}px;
background: ${props => props.backgroundColor ? props.backgroundColor : '#FFF'};
box-shadow: 0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12);
color: ${props => props.color ? props.color : 'black'};
font-family: Roboto;
font-size:${props => props.fontSize ? props.fontSize : 16}px;
font-style: normal;
font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
line-height: ${props => props.lineHeight ? props.lineHeight : 178.688}%; /* 28.59px */
padding-left: 15px;
`