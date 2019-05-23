//PostContainer
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import Post from '../Post';

const PostContainer = props => {

    return (
      <div>
        {props.posts.map(item => <Post post={item}/>)}
      </div>
  );
}





export default PostContainer;