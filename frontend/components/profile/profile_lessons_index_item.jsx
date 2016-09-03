import React from 'react';


const ProfileLessonsIndexItem = ({ lesson }) => {
  return(
    <div className="profile-item-container">
      <li className="profile-lessons-item">
        <img src={ lesson.thumbnail_url } />
      </li>
    </div>
  );
};

export default ProfileLessonsIndexItem;
