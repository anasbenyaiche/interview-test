import React from 'react';
import {Link,Route} from 'react-router-dom'
import Post from './post'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 10,
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
    button: {
      margin: theme.spacing(1),
    }
  
  }));
 
function Profile(props){
    const classes = useStyles();
    return(
        <div id={props.id} style={{height:'30%',width:'30%', border:'0.5px solid gray',margin:'2%' }} >
          
            <Grid container justify="center" alignItems="center">
      
      <Avatar alt="Remy Sharp" src="/profile.png" className={classes.bigAvatar} />
    </Grid>
            <h1>{props.name}</h1>
            <h2>{props.profession}</h2>
            <p>{props.description}</p>
            <Link to={props.link}><Button variant="contained" color="primary" className={classes.button}>
            
        FOLLOW
      </Button></Link> 
 
        </div>)
 
}
export default Profile