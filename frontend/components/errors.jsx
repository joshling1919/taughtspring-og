import React from 'react';

const Errors = ({errors}) => {
  let errorsList = errors.map(error => (
    <li key={error}>{error}</li>
  ));
  return(
    <ul className="errors">
      {errorsList}
    </ul>
  );
};


export default Errors;
