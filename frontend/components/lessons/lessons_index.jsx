import React from 'react';

import LessonsIndexItem from './lessons_index_item';
import Loader from 'react-loader';

class LessonsIndex extends React.Component {
  constructor(props){
    super(props);
    this.incrementer = 0;
    this._generateKey = this._generateKey.bind(this);
  }

  _generateKey(){
    this.incrementer++;
    return(
      this.incrementer
    );
  }

  render() {
    if (!this.props.isLoading) {
      if (!this.props.currentUser && this.props.lessonsIndex.length > 0) {
        return(
          <div>
            
            <ul className="lessons-index">
              {this.props.lessonsIndex.map( lesson => (
                <LessonsIndexItem
                  key={this._generateKey()}
                  lesson={lesson}
                  />
              ))}
            </ul>
          </div>
        );
      } else if (this.props.lessonsIndex.length > 0) {
        return(
          <ul className="lessons-index">
            {this.props.lessonsIndex.map( lesson => (
              <LessonsIndexItem
                key={this._generateKey()}
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
        <Loader loaded={false}>
          <ul className="lessons-index">
          </ul>
        </Loader>
      );
    }
    }
}

export default LessonsIndex;
