import React from 'react';
import PersonalizedComment from './component/personalizedcomment'
import {Link } from 'react-router-dom'
import { Button, Comment, Form, Header } from 'semantic-ui-react'



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
              <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>
      {this.state.comments.map(e=>   <PersonalizedComment 
        id={e.id} 
        name={e.name}
        contain={e.body}/>
        )}</Comment.Group></div>
        </div>)
    }
}