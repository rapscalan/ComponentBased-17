import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
};

export default App;
