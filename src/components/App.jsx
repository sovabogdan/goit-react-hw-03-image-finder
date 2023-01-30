import React, { Component } from "react";
import Searchbar from "./Searchbar";
import SearchInfo from "./SearchInfo";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {
    imageName: "",
  };

  handleFormSubmit = (inputValueName) => {
    this.setState({
      imageName: inputValueName,
    });
  };

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.handleFormSubmit} />
          <div className="container">
            <SearchInfo imageName={this.state.imageName} />
          </div>
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;