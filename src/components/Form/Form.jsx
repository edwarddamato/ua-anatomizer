import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = props => (
  <section className="form">
    <section className="form_description">
      <span className="copy copy--extra">
        <p><strong>anatomize</strong> <em>verb</em></p>
        <p>To dissect (a body). To examine and analyse in detail.</p>
      </span>
      <p>Paste a list of <strong>user agent</strong> strings separated by a new line to generate statistics by browser (and version), operating system and device.</p>
    </section>
    <textarea className="form_input" placeholder={props.currentUserAgent} />
    <button className="form_button">Anatomize!</button>
  </section>
);

Form.propTypes = {
  currentUserAgent: PropTypes.string.isRequired
};

export default Form;
