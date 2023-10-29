import styled from "styled-components";

const StyledPopupCardContainer = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0, 0, 0, 0.50);
z-index: 1;
`

const StyledPopupCard = styled.div`
width: ${props => props.width ? props.width : 700}px;
height: ${props => props.height ? props.height : 500}px;
border-radius: 20px;
background: #081420;
margin: auto;
margin-top: 7%;
box-shadow: 0px 0px 30px 0px rgba(255, 255, 255, 0.41);
position: relative;
`;

const CancelContainer = styled.div`
position: absolute;
right: -32px;
top: -32px;
cursor: pointer;
`

export { StyledPopupCard, StyledPopupCardContainer, CancelContainer }