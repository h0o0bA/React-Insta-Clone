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
      input: "",
      search: dummyData

    }
  }

componentDidMount () {
  this.setState({data: dummyData});

}

changeHandler = e => {
  this.setState({input: e.target.value})
}

find = event => {
  const posts = this.state.data.filter(post=>{
    if(post.username===this.state.input){
      return true;
    }
    else {
      return false;
    }
  })
  this.setState({search: posts})

} else{
  this.setState({search: this.state.dummyData})
}


  render(){
  return (
    <div className="App">
    <span>{this.state.input}</span>
      <SearchBar search={this.state.input} change={this.changeHandler} searchGram={this.find}/>
      <PostContainer posts={this.state.data} />
    </div>
  );
}
}



export default App;