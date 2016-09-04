import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:0
    };

  }

  _renderContent() {
   return (
     <div className="tabs-content">
       {this.props.children[this.state.selected]}
     </div>
   );
 }

  _renderTitles() {
   const labels = (child, index) => {
     let activeClass = (this.state.selected === index ? 'active' : '');
     return(
       <li key={index} className="label">
         <a href="#"
           className={activeClass}
           onClick={this.handleClick.bind(this, index)}>
           {child.props.label}
         </a>
       </li>
     );
   };

   return(
     <ul className="tabs-labels">
       {this.props.children.map(labels.bind(this))}
     </ul>
   );
 }

handleClick(index, e) {
  e.preventDefault();
  this.setState({
    selected: index
  });
}

  render() {
    return(
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
}

export default Tabs;
