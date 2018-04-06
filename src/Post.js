import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ListGroupItem
        onClick={() => this.props.onClick(this.props.id)}
      >
        {this.props.title}
      </ListGroupItem>
    );
  }
}

export default Post;
