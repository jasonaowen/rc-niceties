import React, { Component, PropTypes } from 'react';
// import logo from './logo.svg';
// import './App.css';


class Nicety extends Component {
  render() {
    return (
      <div className="Nicety">
        <h2></h2>
      </div>
    );
  }
}

Nicety.propTypes = {
  person: PropTypes.string.isRequired,
  personThumbnail: PropTypes.string,
  batchId: PropTypes.number,
  text: PropTypes.string,
  isAnonymous: PropTypes.bool.isRequired,
}

export default Nicety;
