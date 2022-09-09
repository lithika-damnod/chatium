import React from "react";
import auth_user from "../auth";

// components
import MenuBar from "./menuBar";
import "./indexPage.css";

function IndexPage() {
  auth_user();
  return (
    <div className="indexPage-wrapper">
      <MenuBar />
    </div>
  );
}

export default IndexPage;
