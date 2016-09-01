import React from 'react';

import LessonsIndexItem from './lessons_index_item';

class LessonsIndex extends React.Component {

  render() {
    let lessons;
    if (this.props.lessonsIndex) {
      lessons = this.props.lessonsIndex.map( lesson => {
        return (
          <LessonsIndexItem
            key={lesson.title + lesson.id}
            lesson={lesson}
          />
        );
        });
    }
    return(
        <ul className="lessons-index">
          {lessons}
        </ul>
    );
  }
}

export default LessonsIndex;
