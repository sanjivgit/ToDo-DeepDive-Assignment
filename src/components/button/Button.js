import React from 'react'
import { StyledButton } from "./button.style"

function Button(props) {
    return (
        <StyledButton {...props} onClick={props.onclick} >{props.text}</StyledButton>
    )
}

export default Button