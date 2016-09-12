import React from 'react';
import ProfileLessonsIndexItem from './profile_lessons_index_item';

const ProfileLessonsIndex = ({ currentUser, lessons, deleteLesson }) => {
  let items;
  if (lessons ) {
    items = lessons.map(lesson => (
      <ProfileLessonsIndexItem
        key={lesson.title + lesson.id}
        currentUser={currentUser}
        lesson={ lesson }
        deleteLesson={ deleteLesson }/>
    ));
  }

  return (
      <ul className="profile-lessons-index">
        { items }
      </ul>
  );
};

export default ProfileLessonsIndex;
