import React from 'react';
import Post from './component/post'

export default class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state={
          
          post:[],
          comments:[],
          loading:false,
    
        }
     
      }
      componentDidMount() {
        const { id } = this.props.match.params
    
        this.setState({ loading: true });
     
      
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then(res => res.json())
          .then(res => {
            this.setState({
              post: res,
              loading: false
            }); 
          })
          .catch(err => {
            this.setState({ loading: false });
          });
          fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
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
             <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
    {this.state.post.map(e=> <Post
     id={e.id} 
     bodypost={e.body} 
     tit={e.title}
     com={this.state.comments.length} 
     onClickPost={this.props.onClickPost}
     link={`/post/${e.id}`}
     />)}
     </div>
        </div>)
    }
}