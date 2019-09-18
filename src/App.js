import React from 'react';
import './App.css';
import Posts from './posts'
import Profiles from './profiles';
import Comments from './comments'
import {BrowserRouter, Route} from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
    postId:1,
    commentId:1

    }
 
  }
  componentDidMount() {
    
    this.setState({
      postId:1 ,
      commentId:1,
    })
  }

 
  render(){ 
 
 return (
   <BrowserRouter>
   
    
    <div className="App">
    <Route exact path='/' component={Profiles}/>
    <Route exact  path='/:id' component={Posts}/>
    <Route exact path={`/post/:id`} component={Comments}/>
    </div>
    
    </BrowserRouter>
  );
 
  }
 
}
 
 
export default App;