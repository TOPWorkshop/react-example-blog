import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Jumbotron,
} from 'react-bootstrap';

import isEmpty from 'lodash/isEmpty';
import remove from 'lodash/remove';

class Profiles extends Component {
  constructor() {
    super();

    this.state = {
      selectedProfile: {},
      favouriteProfiles: localStorage.getItem('favouriteProfiles').split(',').map(item => parseInt(item, 10)),
    };
  }

  componentDidMount() {
    this.setState({ selectedProfile: this.props.profiles[0] || {} });
  }

  setSelectedProfile = profile => () => {
    this.setState({ selectedProfile: profile });
  }

  handleFavouriteProfile = profileId => event => {
    event.stopPropagation();
    const { favouriteProfiles } = this.state;

    if (favouriteProfiles.indexOf(profileId) === -1) {
      favouriteProfiles.push(profileId);
    } else {
      remove(favouriteProfiles, itemId => itemId === profileId);
    }

    this.setState({ favouriteProfiles });
    localStorage.setItem('favouriteProfiles', favouriteProfiles);
  }

  checkFavouriteProfile = profileId => this.state.favouriteProfiles.indexOf(profileId) > -1 ? 'star' : 'star-o';

  renderAddress = (address = {}) => `${address.street}, ${address.zipcode}, ${address.city}`

  render() {
    const { profiles } = this.props;
    const { selectedProfile } = this.state;
    const {
      name,
      email,
      address,
    } = selectedProfile;

    return (
      <Grid>
        <Row>
          <Col md={6}>
            <ListGroup>
              {profiles.map(profile => (
                <ListGroupItem
                  key={profile.id}
                  onClick={this.setSelectedProfile(profile)}
                >
                  <div style={{ float: 'left' }}>
                    <b>{profile.name}</b>
                    <p>{profile.email}</p>
                  </div>

                  <FontAwesome
                    name={this.checkFavouriteProfile(profile.id)}
                    style={{ float: 'right' }}
                    onClick={this.handleFavouriteProfile(profile.id)}
                  />
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col md={6}>
            {!isEmpty(selectedProfile) ?
              <Jumbotron>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{this.renderAddress(address)}</p>
              </Jumbotron> :
            null}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Profiles;
