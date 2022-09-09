import React from "react";

// components
// css
import "./friendChatSelector.css";
import "./groupChatSelector.css";

export default function FriendChatSelector(props) {
  return (
    <div className="friend-chat-row">
      <div className="friend-pic"></div>
      <div className="content">
        <div className="friend-name"></div>
        <div className="last-chat"></div>
      </div>
      {props.nNotifications !== 0 ? (
        <div className="notification-no">{props.nNotifications}</div>
      ) : (
        {}
      )}
    </div>
  );
}
