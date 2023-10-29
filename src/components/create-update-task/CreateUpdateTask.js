import React from 'react'
import { StyledCreateUpdateTask } from './createUpdateTask.style'
import Input from '../input/Input'
import Textarea from '../textarea/Textarea'
import Button from '../button/Button'

function CreateUpdateTask(props) {
    console.log(props.taskData)
    return (
        <StyledCreateUpdateTask {...props} className='p-6 flex flex-col justify-center items-center'>
            <Input
                type='text'
                onchange={props.takeInputs}
                width={450}
                value={props?.taskData?.title}
                name='title'
                placeholder="Enter title"
                required={true}
            />
            <Textarea
                onchange={props.takeInputs}
                className="my-3"
                width={450}
                height={149}
                value={props?.taskData?.description}
                name='description'
                placeholder="Enter description"
                required={true}
            />
            <Input
                onchange={props.takeInputs}
                className="mb-3"
                type="Date"
                width={450}
                value={props?.taskData?.dueDate}
                name='dueDate'
                placeholder="Enter title"
                required={true}
            />
            <Button disabled={!props?.taskData?.dueDate || !props?.taskData?.description || !props?.taskData?.title} onclick={props?.handleCreateUpdate} text={props.buttonName} color="white" />
        </StyledCreateUpdateTask>
    )
}

export default CreateUpdateTask