import React  from 'react'; 

import "./sendButton.css"; 

export default function SendButton(){
    return (
        <div class="btn-wrapper">
            <img src="static/icons/submit-icon.png" alt="send icon" style={{opacity: "73%", width: "35px", }} /> 
        </div>
    ); 
}