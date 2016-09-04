import React from 'react';

import LessonsIndexItem from './lessons_index_item';
import LoginContainer from '../auth/login_container';

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
      <div>
        <LoginContainer />
        <ul className="lessons-index">
          {lessons}
        </ul>
      </div>
    );
  }
}

export default LessonsIndex;
