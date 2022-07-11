import React, {Component} from 'react'; 

// components
import UserStatus from './userStatus'; 
// css
import "./sidePanel.css"; 

export default function SidePanel(props){
    return (
        <div className="container">
            <div className="status-frame">
                <UserStatus />
                <UserStatus active/>
                <UserStatus />
                <UserStatus active/>
                <UserStatus active/>
                <UserStatus />
                <UserStatus />
            </div>
        </div>
    );
}
