import React, {Component} from 'react'; 

// components 
import TextInputField from './textInputField'; 
import PasswordInputField from './passwordInputField'; 
import LoginButton from './loginButton';

// css
import "./login.css"

class Login extends Component{
    state = {}; 
    render(){
        return (
            <div className="login-frame">
                <div class="logo-space">
                    <img src="static/chatium-logo.png" alt="chatium-log" id="logo" />   
                </div>
                <div className="register-form">
                    <TextInputField label="First Name" size="312px" />
                    <TextInputField label="Last Name" size="312px" classText="last-name" />
                    <TextInputField label="Email" size="520px" classText="email-field" />
                    <PasswordInputField label="Password" size="312px" classText="password-field" />
                    <PasswordInputField label="Confirm Password" size="312px" classText="password-con-field" />
                    <div className="sign-area">
                        <p style={{color:"#8D93C6", fontFamily: "Fira Code"}} className="option-1">Sign In</p> 
                        <LoginButton />                    
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Login; 