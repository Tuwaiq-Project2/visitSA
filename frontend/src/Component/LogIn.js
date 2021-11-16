import axios from 'axios'
import React, {useState,useEffect} from 'react'

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

    const logInButton = async()=>{


        // try{
            const response = await axios.post("http://localhost:5000/log-in-user",{
            email: emailInput,
            password: passwordInput
        })
        console.log(response.data);
        if (response.data.id){
            setUserId(response.data.id)
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
            <input onChange={(e)=>{logPassword(e)}} type="text" placeholder="password"/>
            <input onChange={(e)=>{logEmail(e)}} type="text" placeholder="email"/>
            <button onClick={()=>{logInButton()}}>LOG IN</button>
        </div>
    )
}
