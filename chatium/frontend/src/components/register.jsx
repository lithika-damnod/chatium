import React, {Component} from 'react'; 

// components
import TextInputField from './textInputField'; 
import PasswordInputField from './passwordInputField'; 
import LoginButton from './loginButton';

// css
import "./signIn.css"; 
import "./register.css"; 

class Register extends Component{
   render(){
        return (
            <div className="container">
                <div className="content-frame">
                    <div className="logo">
                        <img src="static/chatium-logo.png"/>
                    </div>
                    <div className="signIn-form">
                        <div class="col-1">
                            <TextInputField label="First Name" size="300px" classText="first-name" /> 
                            <TextInputField label="Last Name" size="300px" classText="last-name" />
                        </div>
                        <TextInputField label="Email" size="480px" classText="email-inp" />
                        <PasswordInputField label="Password" size="380px" classText="password-field" /> 
                        <PasswordInputField label="Password" size="380px" classText="password-con-field" /> 
                        <div className="submit-area">
                            <p style={{color:"#8D93C6", fontFamily: "Fira Code", cursor: "pointer"}} className="option-1">Sign In</p> 
                            <LoginButton />
                        </div> 
                    </div>
                </div>
            </div>
        ); 
   }
}

export default Register; 