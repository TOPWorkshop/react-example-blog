import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.shape().isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <ListGroup>
        {this.props.posts.map((post) => (
          <ListGroupItem
            key={post.id}
            onClick={() => this.props.onClick(post.id)}
          >
            {post.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default Posts;
