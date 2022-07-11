import React from 'react'; 

// components

// css
import "./loginButton.css"; 

export default function LoginButton(props){
    return (
        <div className="submit-btn" onClick={props.onClick}>
            Login 
        </div>
    );
}
