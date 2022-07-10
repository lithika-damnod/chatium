import React, {Component} from 'react'; 

// components

// css
import "./userStatus.css"; 

class UserStatus extends Component{
    state = {
        active: this.props.active 
    };
    render(){
        return (
            <div className="status-container">
                <div className="col-1">
                    <div className="pic-container"></div>
                </div>
                <div className="content">
                    <div className="usr-name"></div>
                    <div className="usr-desc"></div>
                </div> 
                <div class="conn-status" style={(this.props.active)?{backgroundColor: "green"}:{}}></div>
            </div>
        );
    }
}

UserStatus.defaultProps = {
    active: false
}

export default UserStatus;  