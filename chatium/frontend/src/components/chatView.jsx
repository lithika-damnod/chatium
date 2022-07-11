import React from 'react'; 

// components
import GroupChat from './groupChat'; 
import FriendChat from './friendChat'; 
// css
import "./chatView.css"; 

function ChatView(props){ 
    return (
        <div className="container">
            <div className="chat-frame">
                <GroupChat nNotifications={20} />
                <GroupChat nNotifications={200} />
                <FriendChat nNotifications={51} />
            </div>
        </div>
    );
}



export default ChatView;  