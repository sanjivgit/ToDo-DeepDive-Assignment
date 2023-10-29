import React from 'react'
import { ToDoCardListContainer } from './toDoCardContainer.style'
import ToDoCard from '../toDoCard/ToDoCard'

function ToDoCardContainer(props) {
    return (
        <ToDoCardListContainer {...props}  >
            <div className='flex flex-col items-center justify-center mb-8'>
                {props.tasks?.length > 0 && props.tasks?.map((task, index) => <ToDoCard
                    key={index}
                    task={task}
                    statusColor={props.statusColorCode.find((code) => code?.status === task?.status)?.color}
                    handleStatus={props.handleStatus}
                    handleOpenToggle={props.handleOpenToggle}
                />)}
            </div>
        </ToDoCardListContainer>
    )
}

export default ToDoCardContainer