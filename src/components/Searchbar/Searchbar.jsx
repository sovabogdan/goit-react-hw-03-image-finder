import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchHeader, SerchForm,SearchBtn,Input} from './Searchbar.styled';

export default class SearchBar extends Component { 
    render() {
        return (
            <SearchHeader>
  <SerchForm>
    <SearchBtn type="submit">
                        <AiOutlineSearch size={25} />
    </SearchBtn>

    <Input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </SerchForm>
</SearchHeader>
        );
}
};