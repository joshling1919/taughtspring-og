import React from 'react';

const LessonsIndexItem = ({ lesson }) => {
  const { title, id, user, image_url } = lesson;
  return(
    <li className="index-item">
      <div className="title-container">
        <a className="title" href={`#lessons/${id}`}>{title}</a>
      </div>
      <div className="index-pic-background">
        <div className="index-pic-container">
          <img className="index-pic" src={image_url}/>
        </div>
      </div>
      <div className="index-description">
        by: <a
        href={`#/profiles/${user.id}`}>{user.first_name} {user.last_name}</a>
      </div>
    </li>
  );
};



export default LessonsIndexItem;
