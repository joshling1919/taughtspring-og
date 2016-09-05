import React from 'react';
import ProfileLessonsIndexItem from './profile_lessons_index_item';

const ProfileLessonsIndex = ({ lessons, deleteLesson }) => {
  let items;
  if (lessons ) {
    items = lessons.map(lesson => (
      <ProfileLessonsIndexItem
        key={lesson.title + lesson.id}
        lesson={ lesson }
        deleteLesson={ deleteLesson }/>
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
