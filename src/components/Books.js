import { Component } from "react";
import request from "superagent";
import React from 'react';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <searchField
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default Books;
