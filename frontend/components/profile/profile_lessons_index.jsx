import React from 'react';
import ProfileLessonsIndexItem from './profile_lessons_index_item';

const ProfileLessonsIndex = ({ lessons }) => {
  let items;
  if (lessons ) {
    items = lessons.map(lesson => (
      <ProfileLessonsIndexItem
        key={lesson.title + lesson.id} 
        lesson={ lesson } />
    ));
  }

  return (
    <div className="profile-lessons-index">
      lessons index here
      <ul>
        { items }
      </ul>
    </div>
  );
};

export default ProfileLessonsIndex;
