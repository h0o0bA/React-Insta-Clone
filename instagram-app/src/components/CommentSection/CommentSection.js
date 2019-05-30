//CommentSection
import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "../SingleComment";
// import "./CommentSection.css";
import styled from "styled-components";

const CommentBox = styled.div`
  input {
    border: white;
    border-top: solid gray 1px;
    //border-right: solid gray 1px;
    margin-top: 10px;
    width: 100%;
    height: 50px;
    padding-left: 2%;
    padding-top: ;
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
    padding-top: ;
  }
`;

class CommentSection extends Component {
  constructor(props) {
    super();
    this.state = {
      //set initial comment state to empty string
      comments: props.comments,
      comment: ""
    };
  }
  //bind input to state on change

  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  AddComment = e => {
    e.preventDefault();

    const user = this.state.username;
    const newComment = {
      text: this.state.comment,
      username: window.localStorage.getItem("user", user)
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      comment: ""
    });
  };

  //Here, the comments section of the array is mapped over, returning each item of the comment
  //section. The comment section is combined with an input because the input needs to be
  //rendered in and interact with the comment section.

  render() {
    return (
      <CommentBox>
        {this.state.comments.map((e, index) => (
          <Comment key={index} comment={e} />
        ))}
        <form onSubmit={this.AddComment}>
          <input
            className="CommentInput"
            type="text"
            placeholder="Add comment... "
            value={this.state.comment}
            onChange={this.commentHandler}
          />
          {/* <CommentInput comment={this.state.comment} submitComment={this.AddComment} changeComment={this.commentHandler}/> */}
        </form>
      </CommentBox>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
