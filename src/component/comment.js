import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Comment(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
          <Grid container justify="center" alignItems="center">
      
      <Avatar alt="Remy Sharp" src="/profile.png" className={classes.bigAvatar} />
    
     
        <div id={props.id}>
       
        
            
        
          <label >{props.name}</label>
          <label >{props.email}</label>
        
        <ListItemText primary="Photos" secondary={props.contain} />
        </div>
    
      </Grid>
     
    </List>
  );
}
