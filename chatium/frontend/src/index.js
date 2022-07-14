import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import SignIn from './components/signIn'; 
import Register from './components/register'; 
import SidePanel from './components/sidePanel'; 
import ChatView from './components/chatView'; 
import ChatFriend from './components/chatFriend';

// CSS 
import './index.css';  // main css 

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<ChatView />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/chat" exact element={<ChatFriend />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById("root")); 