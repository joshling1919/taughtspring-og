import React from 'react';

import LessonsIndexItem from './lessons_index_item';

class LessonsIndex extends React.Component {



  render() {
    let lessons;
    if (!this.props.isLoading) {
      if (this.props.lessonsIndex.length > 0) {
        return(
          <ul className="lessons-index">
            {this.props.lessonsIndex.map( lesson => (
              <LessonsIndexItem
                key={lesson.title + lesson.id}
                lesson={lesson}
                />
            ))}
          </ul>
        );
      } else {
        return(
          <div>Looks Like No Lessons Matched That Search!</div>
        );
      }
    } else{

      return(
        <ul className="lessons-index">
          <div>WE LOADING FAM</div>
        </ul>
      );
    }
    }
}

export default LessonsIndex;
