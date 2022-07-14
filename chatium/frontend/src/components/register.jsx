import React, {useState} from 'react'; 
import axios from 'axios'; 

// components
import TextInputField from './textInputField'; 
import PasswordInputField from './passwordInputField'; 
import LoginButton from './loginButton';

// css
import "./signIn.css"; 
import "./register.css"; 

export default function Register(){

    // useState update functions
    const handleFirstNameChange = (e) => { 
        setFirstName(e.target.value); 
    }; 

    const handleLastNameChange = (e) => { 
        setLastName(e.target.value); 
    }; 

    const handlePasswordChange = (e) => { 
        setPassword(e.target.value); 
    }; 

    const handleEmailChange = (e) => { 
        setEmail(e.target.value); 
    }; 

    // send data for API endpoint
    const sendData = async () => {
        let api_url = "http://127.0.0.1:8000/api/user/"; 

        let res = await axios.post(api_url, {
            "firstName" : firstName, 
            "lastName" : lastName, 
            "email" : email, 
            "password" : password
        }, 
        {
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }); 
        console.log(res.data); 
    };  

   const [firstName, setFirstName] = useState(""); 
   const [lastName, setLastName] = useState(""); 
   const [password, setPassword] = useState(""); 
   const [email, setEmail] = useState(""); 

    return (
        <div className="container">
            <div className="content-frame">
                <div className="logo">
                    <img src="static/chatium-logo.png"/>
                </div>
                <div className="signIn-form">
                    <form name="">
                        <div class="col-1">
                            <TextInputField label="First Name" size="300px" classText="first-name" name="firstname" value={firstName} onChange={handleFirstNameChange}/> 
                            <TextInputField label="Last Name" size="300px" classText="last-name" name="last-name" onChange={handleLastNameChange} value={lastName}/>
                        </div>
                        <TextInputField label="Email" size="480px" classText="email-inp" name="email" onChange={handleEmailChange} value={email} />
                        <PasswordInputField label="Password" size="380px" classText="password-field" name="password" onChange={handlePasswordChange} value = {password}/> 
                        <PasswordInputField label="Password" size="380px" classText="password-con-field" name="password-con" /> 
                        <div className="submit-area">
                            <p style={{color:"#8D93C6", fontFamily: "Fira Code", cursor: "pointer"}} className="option-1">Sign In</p> 
                            <LoginButton onClick={sendData}/>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    ); 
} 
