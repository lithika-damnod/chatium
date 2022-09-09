import React from "react";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

// components
import MenuBar from "./menuBar";

// css
import "./chatFriend.css";
import "./indexPage.css";

export default function ChatFriend(props) {
  return (
    <React.Fragment>
      <div className="chat-wrapper">
        <MenuBar />
        <div className="chat-container">
          <div className="chat-data">
            <FriendProfile
              notifications={3}
              title={"Himath"}
              description={"Well there are stuff i do mind"}
            />
            <GroupProfile
              notifications={10}
              title={"Stackoverflow"}
              description={"Group · 3 participants"}
            />
            <FriendProfile
              notifications={1}
              title={"Adithya"}
              description={"Yako kiywl blpn"}
              active={false}
            />
            <FriendProfile
              notifications={4}
              title={"Sandes"}
              description={"Ethankan mama mehe inne"}
              active={false}
            />
            <FriendProfile
              notifications={0}
              title={"Lahiru"}
              description={"Elm Elm"}
            />
            <FriendProfile
              notifications={0}
              title={"Sasvin"}
              description={"ela ela. mama wish karanmkooo"}
            />
            <GroupProfile
              notifications={10}
              title={"Creeps"}
              description={"Group · 13 participants"}
            />
            <MiniDock />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function MiniDock(props) {
  // floating dock
  return (
    <div className="mini-dock">
      <ChatBubbleOutlineRoundedIcon
        fontSize="medium"
        style={{ color: "#CB91F5" }}
      />
      <WhatshotRoundedIcon fontSize="medium" style={{ color: "#cb91f579" }} />
    </div>
  );
}

function FriendProfile(props) {
  const hide_notifications = (event) => {
    console.log(event.target);
  };
  const hide_expand_btn = (event) => {
    console.log(event.target);
  };
  return (
    <div className="friend-prof">
      <div className="friend-dp">
        <div
          className="friend-pic"
          style={
            props.active === false
              ? { borderColor: "rgba(255, 0, 0, 0.203)" }
              : {}
          }
        ></div>
        <div className="friend-desc">
          <span className="friend-title">{props.title}</span>
          <span className="friend-latest-msg">{props.description}</span>
        </div>
      </div>
      <div
        className="notification-container"
        onMouseOver={hide_notifications}
        onMouseLeave={hide_expand_btn}
      >
        {props.notifications !== 0 ? (
          <div className="notification-no">{props.notifications}</div>
        ) : (
          ""
        )}
      </div>
      <div className="expand-container">
        <ExpandMoreRoundedIcon
          fontSize="medium"
          style={{ color: "#ddb8f7ea" }}
        />
      </div>
    </div>
  );
}

function GroupProfile(props) {
  const hide_notifications = () => {
    console.log("mouse over!");
  };

  return (
    <div className="group-prof">
      <div className="group-dp">
        <div className="group-pic"></div>
        <div className="group-desc">
          <span className="group-title">{props.title}</span>
          <span className="group-caption">{props.description}</span>
        </div>
      </div>
      <div className="notification-container" onMouseOver={hide_notifications}>
        <ExpandMoreRoundedIcon
          fontSize="medium"
          style={{ color: "#ddb8f7ea" }}
        />
        <div className="notification-no">5</div>
      </div>
    </div>
  );
}

/* 
  Group · 13 participants
*/
