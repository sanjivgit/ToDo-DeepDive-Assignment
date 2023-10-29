import styled from "styled-components";

export const StyledPicture = styled.img`
width: ${props => props.width ? props.width : 72}px;
height: ${props => props.height ? props.height : 72}px;
object-fit: cover;
`