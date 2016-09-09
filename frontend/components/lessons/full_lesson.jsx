import React from 'react';
import Errors from '../errors';
import ShowLesson from './show_lesson';
import Tabs from '../tabs/tabs';
import Pane from '../tabs/pane';
import ShowObjective from '../lesson_parts/show_objective';
import ShowSections from '../lesson_parts/show_sections';
import { merge } from 'lodash';
import Loader from 'react-loader';
import EditDeleteLessonButtons from './edit_lesson_button';
import { withRouter } from 'react-router';

class LessonForm extends React.Component {
  constructor(props){
    super(props);
    this.incrementer = 11;
    this.state = this.props.selectedLesson;
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps.selectedLesson);
  }



  _essentials() {
    return(
      [<Pane key="essentials" label="Essentials">
        <ShowLesson template={this.state}
          clearErrors={this.props.clearErrors}
          errors={this.props.errors}/>
      </Pane>]
    );
  }

  _objective() {
    return(
      [<Pane key="objective" label="Objective">
        <ShowObjective
          objectives={this.state.objectives}
          keyPoints={this.state.key_points}
          errors={this.props.errors}/>
      </Pane>]
    );
  }


  _sections() {
    let sections = [];
    let sectionsArr = [];
    if (this.state.sections) {
      sectionsArr = this.state.sections;
    }
    for (let i = 0; i < sectionsArr.length; i++) {
      sections.push(<Pane key={this._generateKey.bind(this, this.state.sections[i])}
        label={this.state.sections[i].name}>
        <ShowSections section={this.state.sections[i]}
          misconceptions={this.state.sections[i].misconceptions}
          cfus={this.state.sections[i].cfus}
          index={i} />
    </Pane>);
    }
    return (
      sections
    );
  }

  _generateKey(obj){
    if (obj.uniq) {
      return obj.uniq;
    } else {
      return (obj.created_at + obj.id);
    }
  }


  _deleteLesson() {
    this.props.deleteLesson(this.props.selectedLesson.id);
    this.props.router.push('/');
  }


  _redirectToEdit() {
    this.props.router.push(`lessons/${this.props.selectedLesson.id}/edit`);
  }

  _allPanes() {
    return(
      this._essentials().concat(this._objective(), this._sections())
    );
  }


  render(){
    if (!this.props.isLoading) {
      return(
        <div className="overall-form-container">
          <EditDeleteLessonButtons currentUser={ this.props.currentUser }
            lessonUserId = {this.props.selectedLesson.user_id}
            redirectToEdit={this._redirectToEdit.bind(this)}
            deleteLesson={this._deleteLesson.bind(this)}/>
          <Tabs selected={0} showPage={true}>
            {this._allPanes()}
          </Tabs>
        </div>
      );
    } else {
      return(
        <Loader loaded={false}/>
      );
    }
  }
}

export default withRouter(LessonForm);
