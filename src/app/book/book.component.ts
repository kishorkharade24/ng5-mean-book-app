import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  /**
   * Get all books
   */
  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(books => {
        this.books = books;
      }, (err) => {
        console.log('Error while getting all books.');
      });
  }

}
