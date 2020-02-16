import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

class Character extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    lastLocation: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }

  render() {
    const { id, name, status, species, origin, gender, lastLocation, image} = this.props;

    return (
      <>
        <div class={stlyles.Character}>
          <div style={{ position: 'relative'}}>
            <img src={image} alt={name} />
            <div><h2>{name}</h2></div>
          </div>
        </div>
      </ >
    );
  }
}

export default Character;
