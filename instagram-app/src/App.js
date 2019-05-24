import React from 'react';
import './App.css';
import dummyData from './components/dummy-data';
import PostPage from './components/PostPage';

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


  render(){
  return (
    <div className="App">
    <span>{this.state.input}</span>
      <PostPage />
    </div>
  );
}
}



export default App;