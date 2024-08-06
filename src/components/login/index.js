import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Navigate } from 'react-router-dom';
import { FormCoantiner, FormHeading, FormSubmitButton, MainContainer, FormLabelText, FormInputBox } from '../styledComponents';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmitLogin = async (event) => {
        event.preventDefault();
        const url = 'https://claw-enterprises-uwzd.onrender.com/login'
        const details = {
            username,
            password
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
                const data = await response.json()
                Cookies.set("jwt_token", data.jwtToken, { expires: 1 })
                Cookies.set("user_id", data.user_id, { expires: 1 })
                Cookies.set("username", data.username, { expires: 1 })
                navigate('/todos')
            }
        } catch (error) {
            console.log(error)
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
            <FormCoantiner>
                <FormHeading>LOGIN</FormHeading>
                <div>
                    <FormLabelText htmlFor='USERNAME'>USERNAME</FormLabelText>
                    <FormInputBox type='text' id='USERNAME' placeholder='Username' value={username} onChange={(event) => handleStateChange(event, setUsername)} />
                </div>
                <div>
                    <FormLabelText htmlFor='PASSWORD'>PASSWORD</FormLabelText>
                    <FormInputBox type='password' id='PASSWORD' placeholder='Password' value={password} onChange={(event) => handleStateChange(event, setPassword)} />
                </div>
                <FormSubmitButton type="submit" onClick={onSubmitLogin}>Submit</FormSubmitButton>
            </FormCoantiner>
        </MainContainer>
    )

}

// class Login extends Component {
//     state = {
//         username: '',
//         password: ''
//     }


// }

export default Login;