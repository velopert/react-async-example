import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { Navigator, Post } from '../../components';
import './PostContainer.css';

class PostContainer extends Component {
    render() {
        return (
            <div className="PostContainer">
                <Navigator/>
                <Post/>
            </div>
        );
    }
}

export default PostContainer;
