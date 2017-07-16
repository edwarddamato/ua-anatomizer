import React from 'react';
import Header from '../Header';
import './App.scss';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <section className="root_container">
        <Header />
      </section>
    );
  }
};

export default App;
