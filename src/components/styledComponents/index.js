import { styled } from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const FormCoantiner = styled.form`
 padding: 20px;
  border: solid 1px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  margin-top: 50px;
  `

export const FormHeading = styled.h1`
font-family: "Roboto";
font-size: 25px;
font-weight: bold;
color: #000000;
`

export const FormLabelText = styled.label`
font-family: "Roboto";
font-size: 15px;
font-weight: 500;
color: #27064e;
margin-bottom: 5px;
`

export const FormInputBox = styled.input`
width: 100%;
height: 30px;
border: solid 1px #27064e;
border-radius: 3px;
outline: none;
padding-left: 5px;
`
export const FormSubmitButton = styled.button`
width: 80px;
height: 30px;
border: solid 1px #364ad0;
border-radius: 2px;
font-family: "Roboto";
font-size: 15px;
font-weight: 500;
margin-top: auto;
color: #364ad0;
`

export const HomeMainContainer = styled.div`
width: 100%;

`

export const HeaderContainer = styled.div`
width: 100%;
background-color: #4805cf;
margin-bottom: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const UsernameIcon = styled.div`
width: 30px;
height: 30px;
border: solid 2px #f4f5f8;
border-radius: 2px;
margin-left: 10px;
font-size: 20px;
font-weight: bolder;
display: flex;
justify-content: center;
align-items: center;
color: #f4f5f8;

`
export const HeaderText = styled.h1`
color: #ffffff;
font-family: "Roboto";
font-size: 25px;
font-weight: bold;
`
export const Heading = styled.h1`
color: ##071161;
font-family: "Roboto";
font-size: 30px;
font-weight: bold;
padding-left: 10px;
`
export const TodosListContainer = styled.ul`
width: 100%;
display: flex;
align-items: flex-start;
flex-wrap: wrap;
padding: 20px;
list-style: none;
`
export const TodoContainer = styled.li`
width: 250px;
min-height: 100px;
border: solid 1px ${props => props.status === 'true' ? "#39822e" : "#4e554d"};
padding-left: 10px;
padding-right: 10px;
padding-bottom: 10px;
background-color: ${props => (props.status === 'true' ? "#dbf0c1" : "#e5f6f7")};
margin: 5px;
`
export const TodoHeadingContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;

`
export const TodoHeading = styled.h1`
font-family: "Roboto";
font-size: 18px;
font-weight: bold;
color: #4c2a61;
margin-bottom: 0px;
`
export const TodoStatusText = styled.p`
font-family: "Roboto";
font-size: 15px;
color: #827988;
text-decoration: underline;
`
export const TodoDescription = styled.p`
font-family: "Roboto";
font-size: 15px;
color: #3d3840;
margin-top: 0px;
`

export const TodoFooterContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
`
export const TodoChechbox = styled.input`
width: 20px;
height: 20px;
`
export const DateText = styled.p`
font-family: "Roboro";
font-size: 15px;
color: #34204d;
margin-left: auto;
`

export const PopupContentContainer = styled.div`
width: 220px;
background-color: #1d3666;
padding: 10px;
`
export const TextareaInputBox = styled.textarea`
border: solid 1px #27064e;
border-radius: 3px;
outline: none;
padding-left: 5px;
margin-top: 10px;
margin-bottom: 10px;
`
export const LogoutContainer = styled.div`
wodth: 100%;
display: flex;
justify-content: center;
align-items: center;
`