import React, {useSate} from 'react'; 

// components
import ReceivedMsg from './receivedMsg';
import SenderMsg from './senderMsg';
import SendButton from './sendButton';
import MsgBox from './msgBox'; 
// css
import "./chatFriend.css"; 

export default function ChatFriend(props){
    return (
        <div className="container">
            <div class="chat-frame">
                <div className="logo">
                    <img src="static/chatium-logo.png"/>
                </div>
                <div className="chatHistory">
                    <ReceivedMsg /> 
                    <ReceivedMsg /> 
                    <SenderMsg />
                    <ReceivedMsg /> 
                    <SenderMsg />
                    <SenderMsg />
                </div>
                <div className="msg-footer">
                    <MsgBox />
                    <SendButton />
                </div>
            </div>
        </div>
    ); 
}


