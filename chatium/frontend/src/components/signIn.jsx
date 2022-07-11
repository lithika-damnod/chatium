import React, {Component} from 'react'; 

// components
import TextInputField from './textInputField'; 
import PasswordInputField from './passwordInputField'; 
import LoginButton from './loginButton';

// css
import './signIn.css'; 

export default function SignIn(props){
    return (
        <div className="container">
            <div className="content-frame">
                <div className="logo">
                    <img src="static/chatium-logo.png"/>
                </div>
                <div className="signIn-form">
                    <TextInputField label="Email" size="520px" classText="email-field" /> 
                    <PasswordInputField label="Password" size="520px" classText="password-field" /> 
                    <div className="submit-area">
                        <p style={{color:"#8D93C6", fontFamily: "Fira Code", cursor: "pointer"}} className="option-1">Create Account</p> 
                        <LoginButton />
                    </div> 
                </div>
            </div>
        </div>
    ); 
}
