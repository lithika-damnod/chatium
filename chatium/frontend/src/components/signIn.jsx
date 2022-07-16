import React from 'react'; 
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';

// components
// css
import './signIn.css'; 

export default function SignIn(props){
    return (
        <div className="container">
            <div className="content-frame">
                <div className="logo">
                    <img src="static/chatium-logo.png"/>
                </div>
                <div className="signIn-form">
                    <TextField
                        id="email-input"
                        label="Email"
                        variant="filled"
                        inputProps={
                            {
                                style: { color: 'white', backgroundColor: '#282e58', borderRadius: '10px' }
                            }
                        }
                        InputLabelProps={
                            {
                                style: { color: 'white'}
                            }
                        }
                        
                    />
                    <TextField
                        id="password-input"
                        label="Password"
                        variant="filled"
                        type="password"
                        margin="normal"
                        inputProps={
                            {
                                style: { color: 'white', backgroundColor: '#282e58', borderRadius: '10px'}
                            }
                        }
                        InputLabelProps={
                            {
                                style: { color: 'white'}
                            }
                        }
                    />
                    <div className="submit-area">
                        <Button id="create-btn">Create Account</Button>
                        <Button variant="contained" sx={{backgroundColor: '#795ae098',}} id="signin-btn">Sign In</Button>
                    </div> 
                </div>
            </div>
        </div>
    ); 
}
