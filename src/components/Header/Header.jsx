import React, {Component, Fragment} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {
        active: ''
    }
    render() {
        return (
            <div className="Header">
                <div className="Logo">OLPlatform</div>
                <div className="NavItems">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Courses</Link>
                    <Link to='/'>My Courses</Link>
                    <Link to='/'>Teach on OLP</Link>
                    <Link to='/'>Cart</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            </div>
        )
    }
}

export default Header;