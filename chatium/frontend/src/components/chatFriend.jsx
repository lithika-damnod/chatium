import React, {useState, useEffect} from 'react'; 
import ReactDOM from 'react-dom/client'

import axios from 'axios'; 

// components
import ReceivedMsg from './receivedMsg';
import SenderMsg from './senderMsg';
import SendButton from './sendButton';
import MsgBox from './msgBox'; 
// css
import "./chatFriend.css"; 


/*
const getUserId = async () => {
    let api_url = "http://127.0.0.1:8000/api/user/"; 

    let res = await axios.get(api_url, 
    {
        headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }); 
    console.log(res.data); 
};  
*/ 

let url = "ws://127.0.0.1:8000/ws/chat/"; 
const chatSocket = new WebSocket(url);
var countEffect=0; 

export default function ChatFriend(props){

    // connects with the websocket 
    function connect_to_chat(){
        chatSocket.onmessage = function(e){
            let data = JSON.parse(e.data); 
            console.log("Data: ", data)
            
            // triggered when a message comes 
            if(data.type === 'chat'){
                // play notification sound
                document.getElementById("received-sound").play(); 
                
                // update the view :TODO Not working 
                handleSettingChats('r');  // updates the state "chats" 
                countEffect++; 
                setCount(chatCount+1);  
            }
        }
    }

    function send_ws_data(){
        // get the value in the message box
        let msg = document.getElementById("user-message").value; 
        // get user id by an api call :TODO
        chatSocket.send(JSON.stringify({
            'message' : msg
        })) 

        // play notification sound 
        document.getElementById("sent-sound").play(); 
        
        // update the view :TODO Not working 
        handleSettingChats('s');  // updates the state "chats"  
        setCount(chatCount+1);  
    }

    const handleSettingChats = (type) => {
        let curr = chats; // copy of previous state
        if(type==='s'){ // s stands for a msg sent by the current signed in user 
            curr.push('s'); 
        }
        else{ // only option possible for this would be 'r', representing a received msg from an outside user 
            curr.push('r'); 
        }
        setChats(curr); 
        console.log(chats); 
    }; 

    const [chats, setChats] = useState([<SenderMsg />, <ReceivedMsg />]);  
    const [chatCount, setCount] = useState(0); 
    connect_to_chat(); 
    useEffect(() => {
        
    }, [countEffect]);  

    return (
        <div className="container">

            <div className="hidden" style={{display: "none"}}>
                <audio src="static/notification-sounds/notification.mp3" id="sent-sound"></audio> 
                <audio src="static/notification-sounds/received.mp3" id="received-sound"></audio> 
            </div>

            <div class="chat-frame">
                <div className="logo">
                    <img src="static/chatium-logo.png"/>
                </div>
                <div className="chatHistory" id="chat-history">
                </div>
                <div className="msg-footer">
                    <MsgBox id="user-message" />
                    <SendButton onClick={send_ws_data}/>
                </div>
            </div>
        </div>
    ); 
}


