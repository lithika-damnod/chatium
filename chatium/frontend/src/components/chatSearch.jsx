import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import "./chatSearch.css";

export default function ChatSearch(props) {
  return (
    <React.Fragment>
      <div className="search-wrapper">
        <SearchRoundedIcon />
        <input type="text" placeholder="Search or start new chat" />
      </div>
    </React.Fragment>
  );
}
