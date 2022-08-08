import React from "react";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import TimelapseRoundedIcon from "@mui/icons-material/TimelapseRounded";
import AddReactionRoundedIcon from "@mui/icons-material/AddReactionRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import "./menuBar.css";

function MenuBar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <img src="static/chatium-logo-cropped.png" alt="logo" id="logo" />
      </div>
      <div className="nav-right" fontSize="small" style={{ color: "#9FB3CA" }}>
        <TimelapseRoundedIcon id="status-icon" />
        <AddReactionRoundedIcon />
        <div className="profile-pic-icon"></div>
        <ExpandMoreRoundedIcon id="expand-more-btn" />
      </div>
    </div>
  );
}

export default MenuBar;
