import React from 'react';


const ProfileLessonsIndexItem = ({ lesson }) => {
  return(
    <li className="profile-item-container">
      <div className="profile-lessons-title">
        <a href={`#/lessons/${lesson.id}`}>{ lesson.title }</a>
      </div>
      <div className="profile-lessons-pic">
        <img className="lessonPic" src={ lesson.image_url } />
      </div>
      <div className="profile-lessons-description">
      </div>
    </li>
  );
};

export default ProfileLessonsIndexItem;
