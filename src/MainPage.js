import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Shelf from './Shelf';

class MainPage extends Component {
	// Render HTML
	render () {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">
					<div>

						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{
											this.props.library.filter
											(book => book.shelf === 'currentlyReading')
											.map(book =>
												<li key={book.id}>
													<Book
														book={book}
														updateShelf={this.props.updateShelf}
														currentShelf="currentlyReading"
													/>
												</li>
											)
										}
									</ol>
								</div>
							</div>

							<div className="bookshelf">
							<h2 className="bookshelf-title">Want To Read</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{
											this.props.library.filter
											(book => book.shelf === 'wantToRead')
											.map(book =>
												<li key={book.id}>
													<Book
														book={book}
														updateShelf={this.props.updateShelf}
														currentShelf="wantToRead"
													/>
												</li>
											)
										}
									</ol>
								</div>
							</div>

						<Shelf
							name={"Want to Read"}
							books={this.props.library.filter(
								book => book.shelf === "wantToRead"
							)}
							updateShelf={this.props.updateShelf}
						/>

						<Shelf
							name={"Read"}
							books={this.props.library.filter(
								book => book.shelf === "read"
							)}
							updateShelf={this.props.updateShelf}
						/>
					</div>
				</div>

				<div className="open-search">
					<Link
						to="/search">
						Add a book
					</Link>
				</div>
			</div>
		);
	}
}

export default MainPage;