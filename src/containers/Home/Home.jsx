import React, {Component} from 'react';
import api from '../../api';
import './Home.css';


class Home extends Component {
    state = {
        loading: false,
    }
    componentDidMount() {
        api.get('/posts')
        .then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div className="Home">
                Hello world
            </div>
        )
    }
}

export default Home;