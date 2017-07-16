import React from 'react';
import Header from '../Header';
import Form from '../Form';
import './App.scss';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentUserAgent: ''
    };
  }

  componentDidMount () {
    const currentUserAgent = navigator.userAgent;
    this.setState({ currentUserAgent });
  }

  render () {
    return (
      <section className="root_container">
        <Header />
        <Form currentUserAgent={this.state.currentUserAgent} />
      </section>
    );
  }
};

export default App;
