import React from 'react'; 
import ReactDOM from 'react-dom'; 

// components
import SignIn from './components/signIn'; 
import Register from './components/register'; 
import SidePanel from './components/sidePanel'; 
import ChatView from './components/chatView'; 

// CSS 
import './index.css';  // main css 

ReactDOM.render(<Register />, document.getElementById("root")); 