import React from 'react';
import './App.css';
import Profile from './component/profile.js';




export default class Profiles extends React.Component {
  constructor(props){
    super(props)
    this.state={
      users:[],
      post:[],
      comments:[],
      loading:false,

    }
 
  }
  componentDidMount() {
    
    this.setState({ loading: true });
 
  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res,
          loading: false
        }); 
      })
      .catch(err => {
        this.setState({ loading: false });
      });
    //   fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       post: res,
    //       loading: false
    //     }); 
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false });
    //   });
    //   fetch("https://jsonplaceholder.typicode.com/comments?postId=3")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       comments: res,
    //       loading: false
    //     }); 
    //   })
    //   .catch(err => {
    //     this.setState({ loading: false });
    //   });

}
 
  render(){ 
 
 return (
 
   
    
    <div className="App">
     
     
     <div  style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
     {this.state.users.map(e=>
     <Profile 
     id={e.id}
     name={e.name}
     profession={e.company.bs}
     description={e.company.catchPhrase}
     link={`/${e.id}`}
     />)}

     </div>
    </div>
 
  );
 
  }
 
}
 
 
