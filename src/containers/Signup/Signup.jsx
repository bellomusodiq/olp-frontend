import React, {Component, Fragment} from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';

class Signup extends Component {
    state = {
        email: '',
        password: '',
    }
    render() {
        return (
            <div className="Login">
                Signup page
            </div>
        )
    }
}

export default Signup;