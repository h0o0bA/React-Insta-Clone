import React from 'react';
import './App.css';
import dummyData from './components/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';



class App extends React.Component {
  constructor(){
    super();
    this.state={
      data: dummyData,
    }
  }

  render(){
  return (
    <div className="App">
      <SearchBar />
      <PostContainer data={this.state.data}/>

    </div>
  );
}
}

export default App;