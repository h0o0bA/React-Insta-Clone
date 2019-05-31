//Single comment
import React from "react";
import PropTypes from "prop-types";
// import "./CommentSection/CommentSection.css";
import styled from "styled-components";

const StyledComment = styled.div`
  //border: solid red 1px;
  text-align: left;
  padding-left: 2%;
  font-size: 1.4rem;
  margin-bottom: 10px;
  line-height: 1.8rem;
}

.comments {
  text-align: left;
  display: flex;
  line-height: 0.1;
}

.newComment {
  text-align: left;
  margin-top: -10px;
}



.CommentInput {
  text-align: left;
  border: white; 
  border-top: solid gray 1px;
  //border-right: solid gray 1px;
  margin-top: 10px;
  width: 100%;
  height: 50px;
  padding-left: 2%;
  padding-top:
  
}



.CommentBox {
    //border: solid red 1px;
    text-align: left;
    padding-left: 2%;
    font-size: 1.4rem;
    margin-bottom: 10px;
    line-height: 1.8rem; 
}
    
.user {
    font-weight: 500;
}
.commententered {
    //border: solid red 1px;
}
`;

const Comment = props => {
  return (
    <div>
      <span className="user">
        <strong>~{props.comment.username}</strong>{" "}
      </span>
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
