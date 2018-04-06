import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map(comment => <li key={comment.id}>{comment.body}</li>)}
      </ul>
    );
  }
}

export default Comments;
