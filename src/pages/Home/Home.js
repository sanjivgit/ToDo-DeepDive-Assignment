import React, { useContext, useState } from 'react'
import { HomeContainer } from './home.style'
import Header from '../../components/header/Header'
import ToDoCardContainer from '../../components/toDoCardContainer/ToDoCardContainer'
import Button from '../../components/button/Button'
import PopupCard from '../../components/popupCard/PopupCard'
import CreateUpdateTask from '../../components/create-update-task/CreateUpdateTask'
import { TaskContext } from '../../containers/create-update-context/taskContext'
import { useQuery, useQueryClient } from 'react-query'
import { apiCall } from '../../services/apiServices'
import moment from "moment"

function Home(props) {
    const { task, dispatch } = useContext(TaskContext)
    const queryClient = useQueryClient();
    const [state, setState] = useState({
        click: false,
        title: null,
        description: null,
        dueDate: null
    })
    const { click, title, description, dueDate } = state;
    function handleOpenPopup(data) {
        if (click) {
            dispatch({ type: "REMOVE_TASK" })
        }
        setState({
            ...state,
            click: !click,
            title: data?.title,
            description: data?.description,
            dueDate: data?.dueDate && moment(data?.dueDate).format("YYYY-MM-DD")
        })
    }

    function handleOnChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    async function handleCreate() {
        let credentials = {
            method: 'POST',
            url: `/toDoList/create`,
            payload: {
                title,
                description,
                dueDate
            }
        }
        let res = await apiCall(credentials)
        const existingTodos = queryClient.getQueryData('todos');
        const updatedTodos = [...existingTodos, res.data]
        console.log("first", updatedTodos)
        queryClient.setQueryData('todos', updatedTodos);
        handleOpenPopup()
    }
    async function handleUpdate() {
        let credentials = {
            method: 'POST',
            url: `/toDoList/update/${task?._id}`,
            payload: {
                title,
                description,
                dueDate
            }
        }

        let res = await apiCall(credentials)
        handleOpenPopup()
        updateTaskDetail({ id: task?._id, ...res.data })
    }

    async function handleUpdateStatus(id) {
        let credentials = {
            method: 'POST',
            url: `/toDoList/update/status/${id}`,
            payload: {
                status: "completed"
            }
        }

        await apiCall(credentials)
        updateTaskDetail({ id: id, status: 'completed' })
    }

    function updateTaskDetail(details) {
        const existingTodos = queryClient.getQueryData('todos');
        const updatedTodos = existingTodos?.map(todo => {
            if (todo._id === details?.id) {
                todo = { ...todo, ...details };
            }
            return todo;
        });
        queryClient.setQueryData('todos', updatedTodos);
    }


    async function fetchGetTasks() {
        let credentials = {
            method: 'GET',
            url: `/toDoList/list`,
        }
        const { data } = await apiCall(credentials)
        return data;

    }

    const { isLoading, isError, data, error } = useQuery('todos', fetchGetTasks)
    const statusColorCode = [
        { status: 'pending', color: 'red' },
        { status: 'progress', color: 'yellow' },
        { status: 'completed', color: 'green' }
    ]

    return (
        <HomeContainer {...props} className='flex flex-col items-center' >
            <div className='flex flex-col items-center mb-20' >
                <Header />
                <Button onclick={handleOpenPopup} color='white' text="Add new task" />
            </div>
            <ToDoCardContainer
                tasks={data}
                statusColorCode={statusColorCode}
                handleOpenToggle={handleOpenPopup}
                handleStatus={handleUpdateStatus}
            />
            {click && <PopupCard
                component={<CreateUpdateTask
                    taskData={state}
                    buttonName={`${task ? 'Update task' : 'Add new task'}`}
                    takeInputs={handleOnChange}
                    handleCreateUpdate={task ? handleUpdate : handleCreate}
                />}
                width={500}
                height={400}
                handleOpenToggle={handleOpenPopup}
            />}
        </HomeContainer>
    )
}

export default Home