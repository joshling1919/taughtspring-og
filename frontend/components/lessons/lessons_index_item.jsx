import React from 'react';

const LessonsIndexItem = ({ lesson }) => {
  const { title, id, user, thumbnail_url } = lesson;
  return(
    <li className="index-item">
      <a className="lessonTitle" href={`#lessons/${id}`}>{title}</a>
      <img src={thumbnail_url}/>
      <span className="author">
      by: <a href={`#/profiles/${user.id}`}>{user.first_name} {user.last_name}</a>
      </span>
    </li>
  );
};



export default LessonsIndexItem;
