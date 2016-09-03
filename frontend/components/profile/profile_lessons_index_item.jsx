import React from 'react';


const ProfileLessonsIndexItem = ({ lesson }) => {
  return(
    <div className="profile-item-container">
      <li className="profile-lessons-item">
        <a href={`#/lessons/${lesson.id}`}>{ lesson.title }</a>
        <div className="lessonPicContainer">
          <img className="lessonPic" src={ lesson.thumbnail_url } />
        </div>
      </li>
    </div>
  );
};

export default ProfileLessonsIndexItem;
