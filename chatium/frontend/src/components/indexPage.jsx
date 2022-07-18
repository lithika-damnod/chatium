import React from 'react'; 
import { Grid } from '@mui/material';
import Container from '@mui/material/Container'; 
import Box from '@mui/material/Box';

// components
import MenuBar from './menuBar';

import "./indexPage.css"; 

function IndexPage(){
    return (
        <React.Fragment>
            <MenuBar />    
            <div className="main-wrapper">
                <div className="chat-wrapper">
                    
                </div> 
                <div className="status-wrapper">
        
                </div>
            </div>
        </React.Fragment>
    ); 
}

export default IndexPage; 