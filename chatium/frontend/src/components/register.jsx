import React, {useState} from 'react'; 
import axios from 'axios'; 
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

// components
// css
import "./signIn.css"; 
import "./register.css"; 

const customTheme = createTheme({
    palette: {
        primary: {
            main: indigo[300]
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }, 
}); 


export default function Register(){
    // form states 
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState(""); 
    
    // validation states 
    const [emailValid, setEmailValidity] = useState(false); 
    const [confirmValid, setConfirmValidity] = useState(false); 
    const [confirmHelperText, setConfirmHelperText] = useState(""); 
    const [emailHelperText, setEmailHelperText] = useState(""); 

    // input handling functiions 
    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value); 
    }
    const handleLastNameInput = (e) => {
        setLastName(e.target.value); 
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value); 
        setEmailValidity(false); 
        setEmailHelperText(""); 
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value); 
    }
    const handleConfirmInput = (e) => {
        setConfirm(e.target.value); 
        setConfirmValidity(false); 
        setConfirmHelperText(""); 
    }

    const sendPostData = async () => {
        // check whether the password confirmation matches 
        if(password !== confirm){
            setConfirmValidity(true); 
            setConfirmHelperText("password does not match"); 
        }
        else {
            let api_url = "http://127.0.0.1:8000/api/user/"; 
            let res = await axios.post(api_url, {
                "firstName": firstName, 
                "lastName" : lastName, 
                "email" : email, 
                "password" : password
            }, 
            {
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }); 

            // manipulate response
            let data = res.data; 
            if(data["status"] === "error"){
                // only possible error for this route is "email" 
                setEmailValidity(true); 
                setEmailHelperText("email is already taken"); 
            }
            window.location.href="/signin"; 
        }
    }

    return ( 
        <ThemeProvider theme={customTheme} >
            <div className="container">
                <div className="content-frame"> 
                    <div className="logo">
                        <img src="static/chatium-logo.png"/>
                    </div>
                    <div className="form-grid">
                        <div className="grid-form-item">
                            <TextField  label="First Name" sx={{width: "100%"}} color="primary" 
                                variant="filled"
                                inputProps={
                                    {
                                        style: { color: 'white', backgroundColor: "#282e58"}
                                    }
                                } 
                                InputLabelProps={
                                    {
                                        style: { color: 'white', borderColor: "white"}
                                    }
                                }
                                onChange={handleFirstNameInput}
                                value={firstName}
                                autoComplete="off"
                            />
                        </div>
                        <div className="grid-form-item">
                            <TextField  label="Last Name" sx={{width: "100%"}} color="primary" 
                                variant="filled"
                                inputProps={
                                    {
                                        style: { color: 'white', backgroundColor: "#282e58"}
                                    }
                                } 
                                InputLabelProps={
                                    {
                                        style: { color: 'white', borderColor: "white"}
                                    }
                                }
                                onChange={handleLastNameInput}
                                value={lastName}
                                autoComplete="off"
                            />
                        </div>
                        <div className="grid-form-item" style={{gridColumn: "1/-1"}}>
                            <TextField  label="Email" sx={{width: "100%"}} color="primary" 
                                variant="filled"
                                inputProps={
                                    {
                                        style: { color: 'white', backgroundColor: "#282e58"}
                                    }
                                } 
                                InputLabelProps={
                                    {
                                        style: { color: 'white', borderColor: "white"}
                                    }
                                }
                                onChange={handleEmailInput}
                                value={email}
                                autoComplete="off"
                                error={emailValid}
                                helperText={emailHelperText}
                            />
                        </div>
                        <div className="grid-form-item">
                            <TextField  label="Password" sx={{width: "100%"}} color="primary" 
                                variant="filled"
                                inputProps={
                                    {
                                        style: { color: 'white', backgroundColor: "#282e58"}
                                    }
                                } 
                                InputLabelProps={
                                    {
                                        style: { color: 'white', borderColor: "white"}
                                    }
                                }
                                onChange={handlePasswordInput}
                                value={password}
                                type="password"
                            />
                        </div>
                        <div className="grid-form-item">
                            <TextField  label="Confirm" sx={{width: "100%"}} color="primary" 
                                variant="filled"
                                inputProps={
                                    {
                                        style: { color: 'white', backgroundColor: "#282e58"}
                                    }
                                } 
                                InputLabelProps={
                                    {
                                        style: { color: 'white', borderColor: "white"}
                                    }
                                }
                                onChange={handleConfirmInput}
                                value={confirm}
                                type="password"
                                error={confirmValid}
                                helperText={confirmHelperText}
                            />
                        </div>
                        <div className="submit-area" style={{ gridColumn: '1/-1'}} >
                            <Button id="create-btn" href="/signin" >Sign In Instead</Button>
                            <Button variant="contained" sx={{backgroundColor: '#795ae098',}} id="signin-btn" onClick={sendPostData} >Sign Up</Button>
                        </div> 
                    </div>
                </div>
            </div>
        </ThemeProvider>
    ); 
} 

