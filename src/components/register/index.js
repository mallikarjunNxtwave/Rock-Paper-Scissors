import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'

import { FormCoantiner, FormHeading, FormInputBox, FormLabelText, FormSubmitButton, MainContainer } from '../styledComponents';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate();

    const getRegister = async (event) => {
        event.preventDefault()

        const url = 'https://claw-enterprises-uwzd.onrender.com/register'
        const details = {
            username, password, email,
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
            const data = await response.json()
            navigate('/login');
            console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleStateChange = (event, setFunction) => {
        setFunction(event.target.value)
    }
    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
        return <Navigate to='/todos' />
    }

    return (
        <MainContainer>
            <FormCoantiner >
                <FormHeading>REGISTER</FormHeading>
                <div>
                    <FormLabelText htmlFor='USERNAME'>USERNAME</FormLabelText>
                    <FormInputBox type='text' id='USERNAME' placeholder='Username' value={username} onChange={(event) => handleStateChange(event, setUsername)} />
                </div>
                <div>
                    <FormLabelText htmlFor='PASSWORD'>PASSWORD</FormLabelText>
                    <FormInputBox type='password' id='PASSWORD' placeholder='Password' value={password} onChange={(event) => handleStateChange(event, setPassword)} />
                </div>
                <div>
                    <FormLabelText type='text' htmlFor='EMAIL'>EMAIL</FormLabelText>
                    <FormInputBox id='EMAIL' placeholder='Email' value={email} onChange={(event) => handleStateChange(event, setEmail)} />
                </div>
                <FormSubmitButton onClick={getRegister}>Submit</FormSubmitButton>
            </FormCoantiner>
        </MainContainer>
    )

}




export default Register;