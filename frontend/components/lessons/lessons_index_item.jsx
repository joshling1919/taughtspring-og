import React from 'react';

const LessonsIndexItem = ({ lesson }) => {
  const { title, id } = lesson;
  return(
    <li className="index-item">
      {title}
    </li>
  );
};



export default LessonsIndexItem;
