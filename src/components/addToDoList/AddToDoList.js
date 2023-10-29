import React from 'react'
import { AddToDoListContainer } from './addToDoList.style'
import Input from '../input/Input'
import Button from '../button/Button'

function AddToDoList(props) {
    return (
        <AddToDoListContainer {...props} className='flex items-center' >
            <Input type="text" outline={false} height={52} placeholder={props.placeholder} width={622} color="#EAEAEA" backgroundColor="#192431" />
            <Button className="ml-2" text="+" fontSize={30} color="#FFF" backgroundColor="#192431" height={52} width={52} />
        </AddToDoListContainer>
    )
}

export default AddToDoList