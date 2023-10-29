import React from 'react'
import { StyledInputContainer } from './inputContainer.style'
import Paragraph from '../paragraph/Paragraph'
import Input from '../input/Input'

function InputContainer(props) {
    return (
        <StyledInputContainer {...props} className='flex flex-col' >
            <Paragraph text={props.label} className="mb-2 ml-2" />
            <Input placeholder={props.placeholder} onChange={props.onchange} />
        </StyledInputContainer>
    )
}

export default InputContainer