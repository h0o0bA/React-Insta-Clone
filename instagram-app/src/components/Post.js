//post
import React from 'react';
import CommentSection from './CommentSection/CommentSection';
import PostHeader from './PostHeader.js';
import Likes from './Likes.js';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div className="header">
        <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
        />
    <div className="post">
      <img
      alt="picture"
      src={props.post.imageUrl}
      />
    </div>
      <Likes like={props.post.likes} />
      <CommentSection comments={props.post.comments}/>
    </div>
  )
}

Post.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          username: PropTypes.string
        })
      )
    })
  )
}

export default Post;