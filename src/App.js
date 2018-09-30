import React from 'react'
import { Route } from 'react-router-dom';

import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    });
  }

  // Update method for shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    // Update UI after updating shelf
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    });
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <MainPage
          books={this.state.books}
          updateShelf={this.updateShelf}
        />
        )} />

        <Route path="/search" render={() => (
          <SearchPage
          updateShelf={this.updateShelf}
          books={this.props.books}
        />
        )} />
      </div>
    );
  }
}

export default BooksApp
