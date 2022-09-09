import React from "react";

// components
import MenuBar from "./menuBar";
import "./indexPage.css";

/*
const auth_user = async () => {
  console.log("auth_user running.. ");
  let auth_api_url = "http://127.0.0.1:8000/api/user/";
  // send a get request
  let res = await axios.get(auth_api_url);
  let data = res.data;
  console.log(data);
  if (data["status"] === "error") {
    window.location.href = "/signin";
  } else {
    console.log(res.data);
  }
};

*/

function IndexPage() {
  return (
    <div className="indexPage-wrapper">
      <MenuBar />
    </div>
  );
}

export default IndexPage;
