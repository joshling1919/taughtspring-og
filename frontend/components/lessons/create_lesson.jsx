import React from 'react';
import Errors from '../errors';
import LessonForm from './lesson_form';
// import TabsDisplay from '../tabs/tabs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class CreateLesson extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl:"http://www.nationofchange.org/wp-content/uploads/2016/05/education.jpg",
      thumbnailUrl: ""
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

  render(){
    const blankTemplate = {
      title: "",
      grade: undefined,
      subject: undefined,
      date: undefined,
      imageUrl: this.state.imageUrl
    };
    return(
      <Tabs
        selectedIndex={0}
      >
        <TabList>

          {/*
            <Tab/> is the actual tab component that users will interact with.

            Selecting a tab can be done by either clicking with the mouse,
            or by using the keyboard tab to give focus then navigating with
            the arrow keys (right/down to select tab to the right of selected,
            left/up to select tab to the left of selected).

            The content of the <Tab/> (this.props.children) will be shown as the label.
          */}

          <Tab>Essentials</Tab>
          <Tab>Objective</Tab>
          <Tab>Add Section</Tab>
        </TabList>

        <TabPanel>
          <h2>Essentials</h2>
          <LessonForm template={blankTemplate}
            handleSubmit={this._handleCreateLesson.bind(this)}
            errors={this.props.errors}
            upload={this._upload}/>
        </TabPanel>

        <TabPanel>
          <h2>Hello from Objectives</h2>
        </TabPanel>

        <TabPanel>
          <h2>Hello Add Section</h2>
        </TabPanel>


      </Tabs>
    );
  }
}

export default CreateLesson;
