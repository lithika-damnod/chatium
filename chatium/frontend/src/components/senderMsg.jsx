import React  from 'react'; 

import "./senderMsg.css"; 

export default function SenderMsg(){
    const theme = {
        backgroundColor: "#4646647a" 
    }
    return (
        <div className="msg-row">
            <div className="msg-box-sender">
                <div className="col-2 name-right">
                    <div className="sender-name" style={theme}></div>
                    <div className="sender-msg" style={theme}></div>
                </div>
                <div className="col-1">
                    <div className="sender-pic" style={theme}></div>
                </div>
            </div>
        </div>
    ); 
}