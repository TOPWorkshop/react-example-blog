import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Comments extends Component {
  renderComment = ({ id, name, body, email }) => (
    <Panel key={id}>
      <Panel.Heading>{name}</Panel.Heading>
      <Panel.Body>{body}</Panel.Body>
      <Panel.Footer>{email}</Panel.Footer>
    </Panel>
  )

  render() {
    return (
      <div>
        {this.props.comments.map(this.renderComment)}
      </div>
    );
  }
}

export default Comments;
