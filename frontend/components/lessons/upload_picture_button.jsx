import React from 'react';


class UploadPictureButton extends React.Component {


  render() {
    return(
      <button type="button"
        onClick={this.props.upload}>Change Lesson Picture!</button>
    );
  }
}



export default UploadPictureButton;
