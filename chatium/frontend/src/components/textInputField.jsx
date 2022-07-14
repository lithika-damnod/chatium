import React, {Component} from 'react'; 

// CSS
import "./textInputField.css"

export default function TextInputField(props){
    return (
        <div className={props.classText}>
            <p class="input-label">{props.label}</p>
            <input type="text" style={{width: props.size }} class="usr-inp" name={props.name} onChange={props.onChange} value={props.value} /> 
        </div>
    ); 
}


