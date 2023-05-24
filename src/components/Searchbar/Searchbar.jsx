import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch, AiFillFileImage} from "react-icons/ai";

import PropTypes from 'prop-types';
import {
  SearchBar,
  SerchForm,
  Input,
  SearchBtn,Logo
} from './SerchBar.styled';

export default class SearhBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = evt => {
    this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    return (
          <SearchBar>
      <Logo>
                <AiFillFileImage size={30}/>
        <h1>ImageFinder</h1>
      </Logo>

        <SerchForm onSubmit={this.handleSubmit}>
                    <SearchBtn type="submit">
            <AiOutlineSearch size={25}/>
          </SearchBtn>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="serchQuery"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </SerchForm>
      </SearchBar>
    )
    
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
