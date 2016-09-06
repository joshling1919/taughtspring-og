import React from 'react';
import Errors from '../errors';
import NewLessonForm from './new_lesson_form';
import Tabs from '../tabs/tabs';
import Pane from '../tabs/pane';
import ObjectiveForm from '../lesson_parts/objective_form';
import { merge } from 'lodash';

class CreateLesson extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl:"http://www.nationofchange.org/wp-content/uploads/2016/05/education.jpg",
      thumbnailUrl: "",
      numSectionTabs: 2,
      title: "",
      grade: undefined,
      subject: undefined,
      date: undefined
    };
    this._upload = this._upload.bind(this);
    this._updateTitle =this._updateTitle.bind(this);
    this._updateGrade=this._updateGrade.bind(this);
    this._updateSubject=this._updateSubject.bind(this);
    this._updateDate=this._updateDate.bind(this);
  }

  _upload(e) {
    e.preventDefault();
    let self = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error) {
        self.setState({
          imageUrl: results[0].url,
          thumbnailUrl: results[0].thumbnail_url
        });
      }
    });
  }

  _handleCreateLesson(e){
    e.preventDefault();
    let lesson = { lesson: merge({},
      this.state, { subject: this._checkforNullSubject(),
      grade: this._checkforGrade() })
    };
    this.props.createLesson(lesson);
  }

  _checkForNullGrade(){
    if (this.state.grade === "(optional)") {
      return null;
    } else {
      return this.state.grade;
    }
  }

  _checkForNullSubject(){
    if (this.state.subject === "(optional)") {
      return null;
    } else {
      return this.state.subject;
    }
  }


  _updateTitle(e){
    this.setState({ title: e.target.value });
  }

  _updateGrade(e){
    this.setState( { grade: e.target.value });
  }

  _updateSubject(e){

    this.setState( { subject: e.target.value });
  }

  _updateDate(e){
    this.setState({ date: e.target.value.toString() });
  }


  _essentials() {
    return(
      [<Pane key="essentials" label="Essentials">
        <NewLessonForm template={this.state}
          updateTitle={this._updateTitle}
          updateGrade={this._updateGrade}
          updateSubject={this._updateSubject}
          updateDate={this._updateDate}
          handleSubmit={this._handleCreateLesson}
          errors={this.props.errors}
          upload={this._upload}/>
      </Pane>]
    );
  }

  _objective() {
    return(
      [<Pane key="objective" label="Objective">
        <ObjectiveForm errors={this.props.errors}/>
      </Pane>]
    );
  }


  _sections() {
    let sections = [];
    for (let i = 0; i < this.state.numSectionTabs; i++) {
      sections.push(<Pane key={i} label={`section ${i}`}>
      <button type="button">Delete Section</button>
    </Pane>);
    }
    return (
      sections
    );
  }


  _addSection() {
    return(
      <Pane
        key="addSection"
        label="+ Add Section" />
    );
  }

  _newSection() {
    this.setState({ numSectionTabs: ++this.state.numSectionTabs });
  }

  _allPanes() {
    return(
      this._essentials().concat(this._objective(), this._sections(), this._addSection())
    );
  }


  render(){
    return(
      <div>
        <button className="lesson-item form-submit"
          type="submit">Submit Lesson</button>
        <Tabs selected={0}
          newSection={this._newSection.bind(this)}>
          {this._allPanes()}
        </Tabs>
      </div>
    );
  }
}

export default CreateLesson;
