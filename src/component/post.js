import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post(props) {
  const classes = useStyles();
  

 

  return (
      <div i style={{marign:'7%'}}>
          <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.id}
          </Avatar>
        }
      
        title={props.tit}
        subheader={props.time}
      />
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.bodypost}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <Link  to={props.link}><IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="comment">
         <span>{props.com}</span>
        </IconButton>
        </Link>
      </CardActions>
    
    </Card>
      </div>
    
  );
}