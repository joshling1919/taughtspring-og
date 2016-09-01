import React from 'react';


class LessonForm extends React.Component {

  _handleCreateLesson(e){
    e.preventDefault();
    let lesson = { lesson:
      {
        title: e.target.title.value,
        user_id: this.props.currentUser.id
      }
    };
    this.props.createLesson(lesson);
  }

  render(){
    return(
      <div>
        <form className="pure-form-aligned" onSubmit={ this._handleCreateLesson.bind(this)}>
          <label>Title</label>
          <input className="lesson-item" name= "title" type="text"></input>
          <label>Grade Level:</label>
          <select className="lesson-item" name="grade" value={undefined}>
            <option className="optional" value={undefined}>(optional)</option>
            <option value={6}>6th Grade</option>
            <option value={7}>7th Grade</option>
            <option value={8}>8th Grade</option>
          </select>
          <label>Subject:</label>
          <select className="lesson-item" name="subject" value={undefined}>
            <option className="optional" value={undefined}>(optional)</option>
            <option value="English">English</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Social Studies">Social Studies</option>
            <option value="Other">Other</option>
          </select>
          <input type="submit" value="Create Lesson" />
        </form>
      </div>
    );
  }
}

export default LessonForm;
