import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { getThemeProps } from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar';

const ExComment = (props) => (
  

    <Comment>
      <Avatar alt="Remy Sharp" src="/profile.png" />
      <Comment.Content>
        <Comment.Author as='a'>{props.name}</Comment.Author>
        <Comment.Metadata>
          <div>{props.email}</div>
        </Comment.Metadata>
        <Comment.Text>{props.contain}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

   

    

)

export default ExComment