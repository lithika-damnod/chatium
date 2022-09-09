import axios from "axios";
import Cookies from "js-cookie";

const auth_user = async () => {
    let auth_api_url = "http://127.0.0.1:8000/api/auth/session";

    var cookie = Cookies.get("email"); 
    console.log(cookie); 
    if (cookie === undefined) {
        window.location.href = "/signin"; 
    }
    else{
        let res = await axios.post(
        auth_api_url,
            {
                session_email: cookie,
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                },
            }
        );

        let data = res.data;
        if (data["status"] === "invalid") window.location.href = "/signin";
        console.log("authenticated :)"); 
    }
};

export default auth_user; 