import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './characters/Character';

import styles from './App1.css';
const characters = require('../data/rickandmorty.json');


class App extends Component {

  render() {
    const characterElements = characters.map((el) => {
      const image = 'src/assets/' + el.id + '.jpeg';

      return (
        <Character key={el.id} id={el.id} name={el.name} status={el.status} species={el.species} gender={el.gender} origin={el.origin.name} lastLocation={el.location.name} image={image} />
      );
    });

    return (
      <React.Fragment>
        <Header />
        <div className={styles.characterSheet}>
          {characterElements}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
