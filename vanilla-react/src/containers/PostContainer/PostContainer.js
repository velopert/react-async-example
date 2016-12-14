import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import { PostWrapper, Navigator, Post } from '../../components';


class PostContainer extends Component {
    render() {
        return (
            <PostWrapper>
                <Navigator/>
                <Post/>
            </PostWrapper>
        );
    }
}

export default PostContainer;
