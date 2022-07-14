import React from 'react'; 

// CSS
import "./textInputField.css"

export default function PasswordInputField(props){
    return (
        <div className={props.classText}>
            <p class="input-label">{props.label}</p>
            <input type={"password"} style={{width: props.size }} class="usr-inp" name={props.name} onChange={props.onChange} value={props.value} /> 
        </div>
    ); 
}