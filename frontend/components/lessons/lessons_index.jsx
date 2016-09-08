import React from 'react';

import LessonsIndexItem from './lessons_index_item';

class LessonsIndex extends React.Component {

  render() {
    let lessons;
    if (this.props.lessonsIndex) {
      if (this.props.lessonsIndex.length > 0) {
          lessons = this.props.lessonsIndex.map( lesson => {
            return (
              <LessonsIndexItem
                key={lesson.title + lesson.id}
                lesson={lesson}
                />
            );
          }
        );
      } else {
        return(
          <div>Looks Like No Lessons Matched That Search!</div>
        );
      }
    }
    return(
        <ul className="lessons-index">
          {lessons}
        </ul>
    );
  }
}

export default LessonsIndex;
