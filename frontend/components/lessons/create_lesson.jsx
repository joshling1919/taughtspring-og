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
      image_url:"http://www.nationofchange.org/wp-content/uploads/2016/05/education.jpg",
      thumbnail_url: "",
      numSectionTabs: 2,
      title: "",
      grade: undefined,
      subject: undefined,
      lesson_date: undefined,
      user_id: this.props.currentUser.id,
      objectives: [""],
      key_points: [""]
    };
    this._upload = this._upload.bind(this);
    this._updateTitle = this._updateTitle.bind(this);
    this._updateGrade = this._updateGrade.bind(this);
    this._updateSubject = this._updateSubject.bind(this);
    this._updateDate = this._updateDate.bind(this);
    this._updateObjectives = this._updateObjectives.bind(this);
    this._updateKeyPoints = this._updateKeyPoints.bind(this);
    this._handleCreateLesson = this._handleCreateLesson.bind(this);
    this._addObjective = this._addObjective.bind(this);
    this._addKeyPoint = this._addKeyPoint.bind(this);
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
      this.state, { subject: this._checkForNullSubject(),
      grade: this._checkForNullGrade() })
    };
    this.props.createLesson(lesson);
  }

  _checkForNullGrade(){
    if (this.state.grade === undefined) {
      return null;
    } else {
      return this.state.grade;
    }
  }

  _checkForNullSubject(){
    if (this.state.subject === undefined) {
      return null;
    } else {
      return this.state.subject;
    }
  }


  _updateTitle(e){
    this.setState({ title: e.target.value });
    this.props.clearErrors();
  }

  _updateGrade(e){
    this.setState( { grade: e.target.value });
  }

  _updateSubject(e){

    this.setState( { subject: e.target.value });
  }

  _updateDate(e){
    this.setState({ lesson_date: e.target.value.toString() });
  }

  _updateObjectives(e) {
    let objIndex = e.target.id;
    let objectivesArr = this.state.objectives.slice();
    objectivesArr[objIndex] = e.target.value;
    this.setState( { objectives: objectivesArr });
  }

  _addObjective() {
    this.setState({ objectives: this.state.objectives.concat([""])});
    console.log(this.state.objectives);
  }

  _updateKeyPoints(e) {
    let kpIndex = e.target.id;
    let keyPointsArr = this.state.key_points.slice();
    keyPointsArr[kpIndex] = e.target.value;
    this.setState( { key_points: keyPointsArr });
  }

  _addKeyPoint() {
    this.setState({ key_points: this.state.key_points.concat([""])});
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
        <ObjectiveForm
          objectives={this.state.objectives}
          updateObjectives={this._updateObjectives}
          addObjective={this._addObjective}
          keyPoints={this.state.key_points}
          updateKeyPoints={this._updateKeyPoints}
          addKeyPoint={this._addKeyPoint}
          errors={this.props.errors}/>
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
