import React from 'react'; 

// components

// css
import "./userStatus.css"; 

export default function UserStatus(props){
    return (
        <div className="status-container">
            <div className="status-col-1">
                <div className="pic-container"></div>
            </div>
            <div className="content">
                <div className="usr-name"></div>
                <div className="usr-desc"></div>
            </div> 
            <div class="conn-status" style={(props.active)?{backgroundColor: "green"}:{}}></div>
        </div>
    );
}