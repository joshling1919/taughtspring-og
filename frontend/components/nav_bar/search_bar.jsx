import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { search: "" };
    this._handleSearch = this._handleSearch.bind(this);
    this._updateSearchBar = this._updateSearchBar.bind(this);
  }

  _handleSearch(e){
    e.preventDefault();
    this.props.router.push(`search/${this.state.search}`);
  }

  _updateSearchBar(e){
    this.setState({ search: e.target.value });
  }

  render(){
    return(
      <li className='nav-bar-search'>
        <form className="search" onSubmit={this._handleSearch}>
          <input className="search"
            type="search"
            name="search"
            placeholder="&#xf002;"
            onChange={this._updateSearchBar}>
          </input>
        </form>
      </li>
    );
  }
}


export default withRouter(SearchBar);
