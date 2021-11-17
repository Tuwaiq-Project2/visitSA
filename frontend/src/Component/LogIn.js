import axios from 'axios'
import React, {useState,useEffect} from 'react'
import "./LogIn.css"
import logo from "./logo.png";


export default function LogIn({setUserId}) {

    const [passwordInput, setPasswordInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    // const [usersArr, setUsersArr] = useState([])

    // useEffect( async() => {
    //     const response = await axios.get("http://localhost:5000/users")
    //     setUsersArr(response.data)
    // }, [])

    const logPassword = (e) =>{
        setPasswordInput(e.target.value)
    }
    
    const logEmail = (e) =>{
        setEmailInput(e.target.value)
    }


    // const storageCurrentUser = async()=>{

    //     localStorage.setItem(JSON.stringify())
    // }

    const logInButton = async()=>{


        // try{
            const response = await axios.post("http://localhost:5000/log-in-user",{
            email: emailInput,
            password: passwordInput
        })
        // console.log(response.data);
        if (response.data.id){
            setUserId(response.data.id)
            localStorage.setItem("Current id",JSON.stringify(response.data.id))
            localStorage.setItem("Current email",JSON.stringify(response.data.email))
            
        }

       


    // } catch{
        //     alert("Check yout email or passowrd")
        // }
        
        // for(let i=0 ; i<usersArr.length ; i++){
        //     if(usersArr[i].email == emailInput && usersArr[i].password == passwordInput){
        //         console.log("DONE");
        //         return
        //     }
        // }
        // console.log("TRY AGAIN");
    }

    return (
        <div>
            <img className="header-logo-login" src={logo} alt="" />
            <h3 className="login-page">Log in page:</h3>
            <div className="log-in-container">
                <input onChange={(e)=>{logEmail(e)}} type="text" placeholder="email"/>
                <input onChange={(e)=>{logPassword(e)}} type="text" placeholder="password"/>

                <button onClick={()=>{logInButton()}}>LOG IN</button>
            </div>
        </div>
    )
}
