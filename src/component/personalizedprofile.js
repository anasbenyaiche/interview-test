import React from 'react';
import './profile.css';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  }

}));

export default function PersonlaziedProfile(props){
  const classes = useStyles();  
  return( 
    
    <div id={props.id} className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="card hovercard">
          <div className="cardheader">
          </div>
          <div className="avatar">
            <img alt="" src={props.src}/>
          </div>
          <div className="info">
            <div className="title">
              <a target="_blank" href="https://scripteden.com/">{props.name}</a>
            </div>
            <div className="desc">{props.profession}</div>
            <div className="desc">{props.description}</div>
          
          </div>
          <div className="bottom">
            
          <Link to={props.link}><Button variant="contained" color="primary" className={classes.button}>
            
            FOLLOW
          </Button></Link> 
          </div>
        </div>
      </div>
    </div>
  </div>)
}