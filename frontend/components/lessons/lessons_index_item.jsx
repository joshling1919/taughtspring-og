import React from 'react';

const LessonsIndexItem = ({ lesson }) => {

  const { title, id, user } = lesson;
  return(
    <li className="index-item">
      <a className="lessonTitle" href={`#lessons/${id}`}>{title}</a>
      <span className="author">
      created by: {user.first_name} {user.last_name}
      </span>
    </li>
  );
};



export default LessonsIndexItem;
