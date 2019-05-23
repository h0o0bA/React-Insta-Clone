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
      data: [],
      search: ""

    }
  }

componentDidMount () {
  this.setState({data: dummyData});
}

changeHandler = e => {
  this.setState({search: e.target.value})
}



// value={props.search} onChange={props.change} onSubmit={props.submit}
  render(){
  return (
    <div className="App">
      <SearchBar search={this.state.search} change={this.changeHandler} searchGram={this.find}/>
      <PostContainer posts={this.state.data} />
    </div>
  );
}
}



export default App;
