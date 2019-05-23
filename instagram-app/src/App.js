import React from 'react';
import './App.css';
import dummyData from './components/dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      data: dummyData
    }
  }

  render(){
  return (
    <div className="App">
      <PostContainer data={this.state.data}/>
      <SearchBar />
    </div>
  );
}
}

export default App;