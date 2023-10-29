import React, { useContext } from 'react'
import { ToDoCardContainer, ToDoCardHeader } from './toDoCard.style'
import Paragraph from '../paragraph/Paragraph'
import Picture from '../picture/Picture'
import { TaskContext } from '../../containers/create-update-context/taskContext'
import Button from '../button/Button'

function ToDoCard(props) {
    const { dispatch } = useContext(TaskContext)
    const { task } = props
    return (
        <ToDoCardContainer {...props} className='flex flex-col mb-6 justify-center px-8 py-6' >
            <ToDoCardHeader className='flex justify-between' >
                <Paragraph color={props.statusColor} text={task.status} fontSize={12} />
                <div className='flex items-center' >
                    {task.status !== "completed" && <Button
                        className="mr-3 border-2"
                        onclick={() => props.handleStatus(task?._id)}
                        text="Marks as done"
                        color="white"
                        backgroundColor="transparent"
                        fontSize={16}
                        height={25}
                        width={120}
                    />}
                    <Picture
                        onclick={() => {
                            dispatch({ type: "ADD_TASK", task })
                            props.handleOpenToggle(task)
                        }}
                        className="flex self-end cursor-pointer"
                        src="/images/edit.png"
                        height={18}
                        width={18}
                        alt="cancle-icon"
                    />
                </div>
            </ToDoCardHeader>
            <Paragraph text={task.title} fontSize={20} />
            <Paragraph className="my-2" fontWeight={400} text={task.description} fontSize={14} />
            <Paragraph fontWeight={600} text={'Due Date: ' + task.dueDate} fontSize={16} color="#B9B9B9" />
        </ToDoCardContainer>
    )
}

export default ToDoCard