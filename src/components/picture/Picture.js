import React from 'react'
import { StyledPicture } from './picture.style'

function Picture(props) {
    return (
        <StyledPicture onClick={props.onclick} {...props} src={props.src} alt={props.alt} />
    )
}

export default Picture