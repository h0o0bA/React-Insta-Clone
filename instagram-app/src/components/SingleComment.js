//Single comment
import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection/CommentSection.css';



const Comment = props => {


  return (
    <div cl>
      <span className="user">~{props.comment.username} </span>
      <span className="commententered">{props.comment.text}</span>
      
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
