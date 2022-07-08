import React, {Component} from 'react'; 

// CSS
import "./textInputField.css"

class PasswordInputField extends Component{
    state = {
        labelName: this.props.label, 
        inputSize: this.props.size, 
        classText: this.props.classText
    }; 
    render(){
        return (
            <div className={this.state.classText}>
                <p class="input-label">{this.state.labelName}</p>
                <input type={"password"} style={{width: this.state.inputSize }} class="usr-inp" /> 
            </div>
        ); 
    }
}

PasswordInputField.defaultProps = {
    classText: ""
}

export default PasswordInputField; 