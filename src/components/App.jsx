import axios from 'axios';
import SearchBar from "./Searchbar";
import ImageGallery from './Images/ImageGallery'


export const App = () => {
  return (
    <div>
      <SearchBar />
      <ImageGallery/>
    </div>
  );
};
