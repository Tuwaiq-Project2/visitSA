import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// import { GoogleLogin, GoogleLogout  } from 'react-google-login';
import "./SignUp.css"
import logo from "./logo.png";


export default function SignUp() {
    const [nameInput, setNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [emailInput, setEmailInput] = useState("")

    // const responseGoogle = (response) => {
    //     console.log(response);
    //   }

    const saveName = (e) =>{
        setNameInput(e.target.value)
    }

    const savePassword = (e) =>{
        setPasswordInput(e.target.value)
    }
    
    const saveEmail = (e) =>{
        setEmailInput(e.target.value)
    }

    const sendData = async()=>{
        await axios.post("http://localhost:5000/new-user",{
            password: passwordInput,
            email: emailInput,
            name: nameInput,
        })

        // return (<Link to="/" />)
    }

    return (
        <div>
                {/* <GoogleLogin
        clientId={'658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
    >
        
        <span> Login with Google</span>
    </GoogleLogin> */}

            <img className="header-logo-signup" src={logo} alt="" />
            <h3 className="signup-page">Sign up page:</h3>
            <div className="sign-up-container">
                <input onChange={(e)=>{saveName(e)}} type="text" placeholder="name"/>
                <input onChange={(e)=>{savePassword(e)}} type="text" placeholder="password"/>
                <input onChange={(e)=>{saveEmail(e)}} type="text" placeholder="email"/>
                <button onClick={()=>{
                //     <Link to="/">
                //   <li>Home</li>
                // </Link>
                // <a href="http://localhost:3000"/>
                    sendData()
                    }}>SIGN UP</button>
            </div>
        </div>
    )
}
