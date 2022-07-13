import React  from 'react'; 

import "./receivedMsg.css"; 

export default function ReceivedMsg(){
    return (
        <div className="msg-row">
            <div className="msg-box">
                <div className="col-1">
                    <div className="sender-pic"></div>
                </div>
                <div className="col-2">
                    <div className="sender-name"></div>
                    <div className="sender-msg"></div>
                </div>
            </div>
        </div>
    ); 
}