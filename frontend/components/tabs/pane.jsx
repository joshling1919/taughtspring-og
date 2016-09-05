import React from 'react';

const Pane = ({ children }) => {
  return(
    <li className="pane">
      { children }
    </li>
  );
};

export default Pane;
