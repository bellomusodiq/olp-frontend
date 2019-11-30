import React, {Component, Fragment} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    render() {
        return (
            <div className="Login">
                Login page
            </div>
        )
    }
}

export default Login;