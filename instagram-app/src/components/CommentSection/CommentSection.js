//CommentSection
import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "../SingleComment";
import "./CommentSection.css";

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
      <div className="CommentBox">
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
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
