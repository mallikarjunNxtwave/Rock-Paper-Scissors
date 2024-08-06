import { useState, useEffect } from 'react'
import { Navigate ,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { CiSquarePlus } from "react-icons/ci";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { format } from "date-fns";
import Popup from "reactjs-popup"
import { DateText, FormInputBox, FormSubmitButton, HeaderContainer, HeaderText, Heading, HomeMainContainer, LogoutContainer, PopupContentContainer, TextareaInputBox, TodoChechbox, TodoContainer, TodoDescription, TodoFooterContainer, TodoHeading, TodoHeadingContainer, TodosListContainer, TodoStatusText, UsernameIcon } from '../styledComponents';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [apiStatus, setApiStatus] = useState('INITIAL')
    const [NewTodoHeading, setHeading] = useState('')
    const [NewTodoDescription, setDescription] = useState('')

    const navigate = useNavigate()

    const getTodos = async () => {
        setApiStatus('INPROGRESS')
        const username = Cookies.get("username");
        // https://claw-enterprises-uwzd.onrender.com
        const url = `https://claw-enterprises-uwzd.onrender.com/todos/${username}`
        try {
            const response = await fetch(url)
            const data = await response.json()
            setTodos(data.todos)

            setApiStatus('SUCCESS')
        } catch (error) {
            setApiStatus('FAILURE')
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, [])

    const username = Cookies.get('username')

    const onChangeCheckbox = async (todoDetails) => {
        const url = `https://claw-enterprises-uwzd.onrender.com/todos/${todoDetails._id}`
        const details = {
            todoHeading: todoDetails.todoHeading,
            todoDescription: todoDetails.todoDescription,
            completed: !todoDetails.completed
        }
        const options = {
            method: 'PUT',
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "Application/json"
            }
        }
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                getTodos()
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onClickDelete = async (id) => {
        const url = `https://claw-enterprises-uwzd.onrender.com/todos/${id}`
        const options = {
            method: "DELETE"
        }
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                getTodos()
            }

        } catch (error) {
            console.log(error)
        }
    }

    if (apiStatus === 'FAILURE') {
        return <p>Try Again</p>
    }
    if (apiStatus === 'INPROGRESS') {
        return <p>Loading</p>
    }

    const handleStateChange = (event, setFunction) => {
        setFunction(event.target.value)
    }

    const onClickSaveButton = async () => {
        const url = 'https://claw-enterprises-uwzd.onrender.com/todos/'
        const details = {
            username,
            todoHeading: NewTodoHeading,
            todoDescription: NewTodoDescription,
            completed: false
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "Application/json"
            }
        }
        try {
            const response = await fetch(url, options)
            if (response.ok) {
                getTodos();
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const createContainer = (todo) => {
        return (
            <div>
                <Popup
                    modal
                    trigger={
                        <CiSquarePlus style={{ color: "#f4f5f8", width: "30px", height: "30px", marginRight: "10px" }} />
                    }
                >
                    <PopupContentContainer>
                        <FormInputBox type='text' placeholder='To-Do Heading' onChange={event => (handleStateChange(event, setHeading))} />
                        <TextareaInputBox type='textarea' cols="20" rows="5" placeholder='To-Do Description' onChange={event => (handleStateChange(event, setDescription))} />
                        <FormSubmitButton type='button' onClick={onClickSaveButton}>Save</FormSubmitButton>
                    </PopupContentContainer>
                </Popup>
            </div>
        )
    }

    const renderTodos = () => (
        todos.map((eachTodo) => {

            return (
                <TodoContainer status={eachTodo.completed.toString()} key={eachTodo._id}>
                    <TodoHeadingContainer>
                        <TodoHeading>
                            {eachTodo.todoHeading}
                        </TodoHeading>
                        <TodoStatusText>
                            {eachTodo.completed ? "Completed" : "Pending"}
                        </TodoStatusText>
                    </TodoHeadingContainer>
                    <TodoDescription>
                        {eachTodo.todoDescription}
                    </TodoDescription>
                    <TodoFooterContainer>
                        <RiDeleteBin4Fill style={{ color: "#34204d", width: "20px", height: "20px", marginRight: "10px" }} onClick={() => onClickDelete(eachTodo._id)} />
                        <TodoChechbox type="checkbox" checked={eachTodo.completed} onChange={() => onChangeCheckbox(eachTodo)} />
                        <DateText>{format(eachTodo.createdDate, "dd/LLL/yyyy")}</DateText>
                    </TodoFooterContainer>

                </TodoContainer>
            )
        })
    )

    const onLogout = () => {
        Cookies.remove('jwt_token')
        Cookies.remove('username')
        Cookies.remove('user_id')
        navigate('/login')
    }

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
        return <Navigate to='/login' />
    }


    return (
        <>
            <HomeMainContainer>
                <HeaderContainer>
                    <UsernameIcon>
                        {username[0].toUpperCase()}.
                    </UsernameIcon>
                    <HeaderText>
                        {username}
                    </HeaderText>
                    {createContainer()}
                </HeaderContainer>
                <Heading>
                    To-Dos
                </Heading>
                <TodosListContainer>
                    {renderTodos()}
                </TodosListContainer>
                <LogoutContainer>
                    <FormSubmitButton onClick={onLogout}>Logout</FormSubmitButton>
                </LogoutContainer>
            </HomeMainContainer>
        </>

    )
}


export default Home