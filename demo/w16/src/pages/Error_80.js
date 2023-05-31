import React from 'react';
import { Link } from 'react-router-dom';

const Error_80 = () => {
  return (
    <section className="error-page section">
        <div className="error-container">
          <h1>oops! it's a dead end</h1>
          <a className="btn btn-primary" href="/">back home</a>
        </div>
      </section>
  );
};

export default Error_80;
