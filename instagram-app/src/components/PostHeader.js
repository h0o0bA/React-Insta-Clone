//header
import React from "react";
// import './PostContainer/PostContainer.css';
import PropTypes from "prop-types";
import styled from "styled-components";

const HeaderDiv = styled.div` 
  display: flex;
  margin-bottom: 15px;
  text-align: left;
}

.userName {
  text-align: left;
  margin-top: 14px;
  margin-left: -80px;
}

.thumbnail img {
  width: 30%;
  border: 1px solid transparent;
  border-radius: 30px;
}
`;

//Here I am creating a component that comprises just the thumbnail and the username
//because it will be easier to style them as a single component. This component
//is passed into the Post component where it is combined with the imageUrl,
//the CommentSection component, and the likes component
const PostHeader = props => {
  return (
    <HeaderDiv>
      <div className="thumbnail">
        <img alt="profile picture" src={props.thumbnailUrl} />
      </div>
      <div className="userName">
        <strong>{props.username}</strong>
      </div>
    </HeaderDiv>
  );
};

PostHeader.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailUrl: PropTypes.string,
      username: PropTypes.string
    })
  )
};

PostHeader.defaultProps = {
  dummyData: []
};

export default PostHeader;
