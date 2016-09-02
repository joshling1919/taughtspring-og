import React from 'react';
import LessonShow from './lesson_show';


class FullLesson extends React.Component {

  componentDidMount(){
    let lessonId = this.props.params.lessonId;
    this.props.requestLesson(lessonId);
  }

  getChildContext() {
    return { currentUser: this.props.currentUser };
  }

  render(){
    const { singleLesson } = this.props;
    return(
      <div className="full-lesson">
        <LessonShow lesson={singleLesson}
          deleteLesson={this.props.deleteLesson}/>
      </div>
    );
  }

}

FullLesson.childContextTypes = {
  currentUser: React.PropTypes.object
};


export default FullLesson;
