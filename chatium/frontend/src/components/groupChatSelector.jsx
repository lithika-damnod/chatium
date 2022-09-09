import React from "react";

// components

// css
import "./groupChatSelector.css";

export default function GroupChatSelector(props) {
  return (
    <div className="chat-row">
      <div className="group-pic"></div>
      <div className="description">
        <div className="group-title"></div>
        <div className="group-description"></div>
      </div>
      {props.nNotifications !== 0 ? (
        <div className="notification-no">{props.nNotifications}</div>
      ) : (
        ""
      )}
    </div>
  );
}
