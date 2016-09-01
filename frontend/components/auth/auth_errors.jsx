import React from 'react';

const AuthErrors = ({errors}) => {
  let errorsList = errors.map(error => (
    <li key={error}>{error}</li>
  ));
  return(
    <ul>
      {errorsList}
    </ul>
  );
};


export default AuthErrors;
