import React from 'react';

const LessonsIndexItem = ({ lesson }) => {
  const { title, id, user, image_url } = lesson;
  return(
    <li className="index-item">
      <a className="lessonTitle" href={`#lessons/${id}`}>{title}</a>
      <div className="index-pic-background">
        <div className="index-pic-container">
          <img className="index-pic" src={image_url}/>
        </div>
      </div>
      <span className="author">
      by: <a href={`#/profiles/${user.id}`}>{user.first_name} {user.last_name}</a>
      </span>
    </li>
  );
};



export default LessonsIndexItem;
