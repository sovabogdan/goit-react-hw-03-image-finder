
import React, { Component } from "react";
import { toast } from "react-toastify";
import { BsSearch } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
    state = {
        imageName: "",
    };

    handleChangeInput = (event) => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.imageName.trim() === "") {
            toast.error("Please enter the name!");
            return;
        }

        this.props.onFormSubmit(this.state.imageName);
        this.setState({
            imageName: "",
        });
        this.mainInput.value = "";
    };

    render() {
        return (
        <header className={styles.searchbar}>
            <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={styles.searchFormButton}>
                    <BsSearch size="20px" />
                    <span className={styles.searchFormButtonLabel}></span>
                </button>

            <input
                onChange={this.handleChangeInput}
                ref={(ref) => this.mainInput= ref}
                className={styles.searchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
            </form>
        </header>
        );
    }
}

export default Searchbar;