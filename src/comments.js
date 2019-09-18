import React from 'react';
import Comment from './component/comment'
import {Link } from 'react-router-dom'



export default class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
          
          post:[],
          comments:[],
          loading:false,
    
        }
     
      }
      componentDidMount() {
        

    
        this.setState({ loading: true });
     
      
       
          fetch(`https://jsonplaceholder.typicode.com/comments?postId=3`)
          .then(res => res.json())
          .then(res => {
            this.setState({
              comments: res,
              loading: false
            }); 
          })
          .catch(err => {
            this.setState({ loading: false });
          });
    }

    render(){
        return(<div>
            <Link to='/'>Go Back to home page</Link>
              <div>
      {this.state.comments.map(e=><Comment 
        id={e.id} 
        name={e.name}
        contain={e.body}/>
        )}</div>
        </div>)
    }
}