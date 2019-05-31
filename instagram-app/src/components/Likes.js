//Likes
import React from "react";
// import './PostContainer/PostContainer.css';
import Heart from "./img/ig-heart.png";
import styled from "styled-components";

const LikesDiv = styled.div`
  img.heart {
    width: 5%;
    text-align: left;
    margin-top: 10px;

    &:hover {
      cursor: pointer;
      transform: scaleX(1.2);
    }
  }

  .likes {
    text-align: left;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

//Here the likes section is separated into its own component because it will
//need a method built on to it to increment the likes. Eventually it will be
//built out into a class container to deal with its own functionality.
class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
  }

  likePost = () => {
    this.setState(prevState => {
      return { likes: prevState.likes + 1 };
    });
  };

  render() {
    return (
      <LikesDiv>
        <div>
          <img
            className="heart"
            alt="insta-heart"
            src={Heart}
            onClick={this.likePost}
          />
        </div>
        <div className="likes">
          <strong>{this.state.likes} likes</strong>
        </div>
      </LikesDiv>
    );
  }
}

Likes.propTypes = {};
export default Likes;
