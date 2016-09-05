import React from 'react';
import Errors from '../errors';
import LessonForm from './lesson_form';
import Tabs from '../tabs/tabs';
import Pane from '../tabs/pane';



class CreateLesson extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl:"http://www.nationofchange.org/wp-content/uploads/2016/05/education.jpg",
      thumbnailUrl: "",
      numSectionTabs: 2
    };
    this._upload = this._upload.bind(this);
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
    let lesson = { lesson:
      {
        title: e.target.title.value,
        user_id: this.props.currentUser.id,
        subject: this._checkForNullSubject(e),
        grade: this._checkForNullGrade(e),
        lesson_date: e.target.lesson_date.value,
        image_url: this.state.imageUrl,
        thumbnail_url: this.state.thumbnailUrl
      }
    };
    this.props.createLesson(lesson);
  }

  _checkForNullGrade(e){
    if (e.target.grade.value === "(optional)") {
      return null;
    } else {
      return e.target.grade.value;
    }
  }

  _checkForNullSubject(e){
    if (e.target.subject.value === "(optional)") {
      return null;
    } else {
      return e.target.subject.value;
    }
  }
  _blankTemplate() {
    return({
        title: "",
        grade: undefined,
        subject: undefined,
        date: undefined,
        imageUrl: this.state.imageUrl
      }
    );
  }

  _essentials() {
    return(
      [<Pane key="essentials" label="Essentials">
        <LessonForm template={this._blankTemplate()}
          handleSubmit={this._handleCreateLesson.bind(this)}
          errors={this.props.errors}
          upload={this._upload}/>
      </Pane>]
    );
  }

  _objective() {
    return(
      [<Pane key="objective" label="Objective">
        <div>These are my objectives!</div>
      </Pane>]
    );
  }


  _sections() {
    let sections = [];
    for (let i = 0; i < this.state.numSectionTabs; i++) {
      sections.push(<Pane key={i} label="section"/>);
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
    const {deltaPosition, controlledPosition} = this.state;
    return(
      <div>
        <Tabs selected={0}
          newSection={this._newSection.bind(this)}>
          {this._allPanes()}
        </Tabs>
      </div>
    );
  }
}

export default CreateLesson;
