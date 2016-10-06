import React from 'react';
import DeletePartButton from './delete_part_button';
import ShowMisconception from './show_misconception';
import ShowCFU from './show_cfu';
import { uniqueId } from 'lodash';

class ShowSections extends React.Component {
  constructor(props){
    super(props);
    this.incrementer = 1000;
  }

  _generateKey(obj){
    if (obj.uniq) {
      return obj.uniq;
    } else {
      return (obj.created_at + obj.id);
    }
  }

  _spanKey(){
    this.incrementer++;
    return this.incrementer;
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
          <div className="show-name-field">
            <label className="section-show-label">Name: </label>
              {name}
          </div>
          <div className="show-name-field">
            <label className="section-show-label">Description: </label>
              {description.split("\n").map(item => {
                return(
                  <span key={this._spanKey()}>
                    {item}
                    <br/>
                  </span>
                );
              })}
          </div>
          <div className="show-name-field">
            <label className="section-show-label">
              Common Student Misconceptions:
            </label>
            <ol>
              {this._misconceptionsList()}
            </ol>
          </div>
          <div className="show-name-field">
            <label className="section-show-label">
              Checks For Understanding/Questions:
            </label>
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
