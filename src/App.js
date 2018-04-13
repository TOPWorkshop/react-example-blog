import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Profiles from './Profiles';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      profiles: [],
      comments: [],
      selectedPostId: null,
    };
  }

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles = () => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    }).then(({ data: profiles }) => {
      this.setState({ profiles });
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
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{'Welcome to React'}</h1>
          </header>

          <div className="App-intro" style={{ marginTop: 50 }}>
            <Switch>
              <Route exact path="/" component={() => <Profiles profiles={this.state.profiles} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
