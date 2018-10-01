import React from 'react';

import { Route } from 'react-router-dom';

import SearchPage from './SearchPage';

import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI';

import './App.css';

class BooksApp extends React.Component {
  // Add state for getting Books
  state = {
    library: []
  };

  // Get books from BooksAPI
  componentDidMount() {
    BooksAPI.getAll().then((library) => {
      this.setState({ library })
    });
  }

  // Update book shelves when given option is clicked
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      BooksAPI.getAll().then((library) => { this.setState({ library })
      })
    })
  };

  // Render HTML
  render() {
    return (
      <div className="app">

        <Route exact path="/"
          render={() => (
            <MainPage
              library={this.state.library}
              updateShelf={this.updateShelf}
            />
          )}
        />

        <Route exact path="/search"
          render={() => (
            <SearchPage
              library={this.state.library}
              updateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp