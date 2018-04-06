import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Posts from './Posts';
import Comments from './Comments';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      comments: [],
      selectedPostId: null,
    };
  }

  getPosts = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).then(({ data }) => {
      this.setState({ posts: data });
    });
  }

  getComments = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/comments',
      params: {
        postId: this.state.selectedPostId,
      },
    }).then(({ data: comments }) => {
      this.setState({ comments });
    });
  }

  handlePostClick = (postId) => {
    this.setState({ selectedPostId: postId }, this.getComments);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="App-intro">
          <Grid>
            <Row>
              <Col md={6}>
                <button onClick={this.getPosts}>{'get posts'}</button>
                <Posts
                  posts={this.state.posts}
                  onClick={this.handlePostClick}
                />
              </Col>
              <Col md={6}>
                <Comments comments={this.state.comments} />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
