import React from 'react';
import DeletePartButton from './delete_part_button';
import ShowMisconception from './show_misconception';
import ShowCFU from './show_cfu';
import { uniqueId } from 'lodash';

class ShowSections extends React.Component {

  _generateKey(obj){
    if (obj.uniq) {
      return obj.uniq;
    } else {
      return obj.created_at;
    }
  }

  _misconceptionsList(){
    if (this.props.misconceptions) {
      return(
        this.props.misconceptions.map( (misconception, i) => {
          return(
              <ShowMisconception key={this._generateKey.bind(this, misconception)()}
                misconception={misconception.misconception}
                sectionIndex={this.props.index}
                misconceptionIndex={i}/>
            );
          }
        )
      );
    } else {
      return <div/>;
    }
  }

  _cfusList(){
    if (this.props.cfus) {
      return(
        this.props.cfus.map( (cfu, i) => {
          return(
              <ShowCFU key={this._generateKey.bind(this, cfu)()}
                question={cfu.question}
                answer={cfu.answer}
                sectionIndex={this.props.index}
                cfuIndex={i}/>
            );
          }
        )
      );
    } else {
      return <div/>;
    }
  }





  render() {
    let name, description, index;
    if (this.props.section) {
      name = this.props.section.name;
      description = this.props.section.description;
      index = this.props.index;
    }
    return(
      <div className="lesson-form-component">
        <form className="lesson-form" >
          <label>Name: </label>
          <div className="lesson-item">
            {name}
          </div>
          <label>Description: </label>
          <div className="lesson-item">
            {description}
          </div>
          <div>
            <ol>
              {this._misconceptionsList()}
            </ol>
            <ol>
              {this._cfusList()}
            </ol>
          </div>
        </form>
      </div>
    );
  }

}

export default ShowSections;
