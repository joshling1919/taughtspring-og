import React from 'react';


const ProfileLessonsIndexItem = ({ lesson }) => {
  return(
    <div className="profile-item-container">
      <li className="profile-lessons-item">
        <a href={`#/lessons/${lesson.id}`}>{ lesson.title }</a>
        <img src={ lesson.thumbnail_url } />
      </li>
    </div>
  );
};

export default ProfileLessonsIndexItem;
