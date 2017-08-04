import React from 'react';
import PropTypes from 'prop-types';
import { parse } from '../../parser';
import './Form.scss';

class Form extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentInput: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleInputChange (e) {
    this.setState({ currentInput: e.target.value });
  }

  handleButtonClick () {
    const input = this.state.currentInput;
    const stats = parse(input);
    console.log(stats);
  }

  render () {
    return (
      <section className="form">
        <section className="form_description">
          <span className="copy copy--extra">
            <p><strong>anatomize</strong> <em>verb</em></p>
            <p>To dissect (a body). To examine and analyse in detail.</p>
          </span>
          <p>Paste a list of <strong>user agent</strong> strings separated by a new line to generate statistics by browser (and version), operating system and device.</p>
        </section>
        <textarea className="form_input" onChange={this.handleInputChange} placeholder={this.props.currentUserAgent} />
        <button className="form_button" onClick={this.handleButtonClick}>Anatomize!</button>
      </section>
    );
  }
};

Form.propTypes = {
  currentUserAgent: PropTypes.string.isRequired
};

export default Form;
