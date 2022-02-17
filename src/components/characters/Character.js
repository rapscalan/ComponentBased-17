import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

//const characters = require('../../data/rickandmorty.json');

class Character extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    lastLocation: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }
  // characters.forEach(element => {
  //   console.log(el.name);
  // });

  render() {
    const { id, name, status, species, origin, gender, lastLocation, image } = this.props;
    // characters.forEach(el => {
    //   console.log(el.name);
    // });

    return (

      <>
        <div className={styles.Character}>
          {/* <section> */}
            <div style={{ position: 'relative' }}>
              <img src={image} alt={name}/>
              <div><h2>{name}</h2></div>
            </div>
            <ul>
              <li>
                <span className={styles.left}>Status</span>
                <span className={styles.right}>{status}</span>
              </li>
              <li>
                <span className={styles.left}>Species</span>
                <span className={styles.right}>{species}</span>
              </li>
              <li>
                <span className={styles.left}>Gender</span>
                <span className={styles.right}>{gender}</span>
              </li>
              <li>
                <span className={styles.left}>Origin</span>
                <span className={styles.right}>{origin}</span>
              </li>
              <li>
                <span className={styles.left}>Last Location</span>
                <span className={styles.right}>{lastLocation}</span>
              </li>
            </ul>
          {/* </section> */}
        </div>
      </ >
    );
  }
}

export default Character;
