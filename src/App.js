import { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import ProtectedRoute from './components/protectedRoute'
import Login from './components/login'
import Home from './components/home'
import Register from './components/register'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' Component={Login} />
          <Route exact path='/todos' Component={Home} />
          <Route exact path='/register' Component={Register} />
        </Routes>
      </BrowserRouter>
    )
  }
}


// class App extends Component {

//   state = {
//     todoId: '',
//   }

//   testFunction = async () => {
//     const url = 'https://claw-enterprises-uwzd.onrender.com/user/register'
//     const details = {
//       username: 'vinodkumar',
//       password: 'test12345',
//       email: 'vinodkumar@gmail.com',
//     }
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(details),
//       headers: {
//         'Content-type': 'application/json'
//       },
//     }

//     try {
//       const response = await fetch(url, options)
//       const data = await response.json()

//       console.log(data)
//       console.log("Success")
//     } catch (error) {
//       console.log(error)
//       console.log("Failed")
//     }
//   }

//   testLogin = async () => {
//     const url = 'https://claw-enterprises-uwzd.onrender.com/login'

//     const details = {
//       username: "vinodkumar",
//       password: 'test12345'
//     }
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(details),
//       headers: {
//         "Content-type": "Application/json"
//       }
//     }
//     const response = await fetch(url, options);
//     const data = await response.json()
//     console.log(data.userId);

//     this.setState({
//       userId: data.userId
//     })

//   }

//   onClickFuntion = () => {
//     this.testLogin()
//     console.log("working")
//   }

//   onClickdelete = async () => {
//     const { todoId } = this.state
//     const url = `https://claw-enterprises-uwzd.onrender.com/todos/${todoId}`
//     console.log(todoId);
//     try {
//       const response = await fetch(url, { method: 'DELETE' })
//       const data = await response.json();
//       console.log(data)
//     } catch (error) {
//       console.log("Failed to delete item")
//     }



//   }
//   // https://claw-enterprises-uwzd.onrender.com
//   onClickCreateTodo = async () => {
//     const url = "https://claw-enterprises-uwzd.onrender.com/todos"
//     const details = {
//       username: 'vinod',
//       todoHeading: "COLLAGE",
//       todoDescription: "Just visit purpose",
//       completed: false,
//     }
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(details),
//       headers: {
//         "Content-Type": "Application/json"
//       }
//     }
//     try {
//       const response = await fetch(url, options);
//       const data = await response.json();
//       const todoId = data._id;
//       console.log("Successfully Created todo", todoId)
//       this.setState({
//         todoId,
//       })
//     } catch (error) {
//       console.log(error, "Failed creating todo")
//     }


//   }

//   onClickUpdate = async () => {
//     const { todoId } = this.state;
//     const url = `https://claw-enterprises-uwzd.onrender.com/todos/${todoId}`
//     const details = {
//       todoHeading: "SCHOOL",
//       todoDescription: "Attend The Class",
//       completed: true
//     }
//     const options = {
//       method: 'PUT',
//       body: JSON.stringify(details),
//       headers: {
//         "Content-Type": "Application/json"
//       }
//     }

//     try {
//       const response = await fetch(url, options);
//       const data = await response.json()
//       console.log(data)
//     } catch (error) {
//       console.log("Failed to update todo")
//     }
//   }

//   onClickCreateGetTodos = async() => {
//     const url = 'http://localhost:5001/todos/vinod'
//     try {
//       const response = await fetch(url)
//       const data = response.json()
//     } catch (error) {
//       console.log("can`t get todos")
//     }
//   }

//   render() {
//     const { userId } = this.state

//     return (
//       <>
//         <h1>Hello World</h1>
//         <button type='button' onClick={this.onClickFuntion}>Click</button>
//         <button type='button' onClick={this.onClickCreateTodo}>Create</button>
//         <button type='button' onClick={this.onClickCreateGetTodos}>Get todos</button>
//         <button type='button' onClick={this.onClickUpdate}>Update</button>
//         <button type='button' onClick={this.onClickdelete}>Delete</button>
//       </>)
//   }
// }



export default App;
