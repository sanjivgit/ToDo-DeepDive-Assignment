import React from 'react'
import { StyledParagraph } from './paragraph.style'

function Paragraph(props) {
    return (
        <StyledParagraph {...props} >{props.text}</StyledParagraph>
    )
}

export default Paragraph