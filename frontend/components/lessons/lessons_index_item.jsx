import React from 'react';

const LessonsIndexItem = ({ lesson }) => {

  const { title, id } = lesson;
  return(
    <li className="index-item">
      <a href={`#lessons/${id}`}>{title}</a>
    </li>
  );
};



export default LessonsIndexItem;
