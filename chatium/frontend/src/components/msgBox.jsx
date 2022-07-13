import React, {useState} from 'react'; 

import "./msgBox.css"; 

export default function MsgBox(){
    const handleMessageTyping = (e) => {
        setMsg(e.target.value); 
    }; 
    const [msg, setMsg] = useState(""); 

    return (
        <div class="textarea-wrapper">
            <textarea onChange={handleMessageTyping} > 
                { msg }
            </textarea>  
        </div>
    ); 
}