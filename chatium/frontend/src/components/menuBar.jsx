import React from 'react'; 
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import TimelapseRoundedIcon from '@mui/icons-material/TimelapseRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import "./menuBar.css"; 

function MenuBar() {
   return (
      <div className="menu-wrapper">
         <div classname="left">
            <img src="static/chatium-logo.png" className="logo-centered" />
         </div>
         <div className="right">
            <TimelapseRoundedIcon style={{ color: "#c5dff2c9" }} fontSize="medium" />
            <AddReactionRoundedIcon style={{ color: "#c5dff2c9" }} fontSize="medium" />
            <Avatar sx={{ bgcolor: deepPurple[500] }}>LD</Avatar>           
            <ExpandMoreRoundedIcon style={{ color: "#c5dff2c9" }} fontSize="medium" />
         </div>
      </div> 
   ); 
}

export default MenuBar; 