import React from 'react';

class SearchBar extends React.Component {

  render(){
    return(
      <li className='nav-bar-search'>
        <input className="search"
          type="search"
          placeholder="&#xf002;"
          ></input>
      </li>
    );
  }
}


export default SearchBar;
