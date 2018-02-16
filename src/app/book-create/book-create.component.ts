import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book: any = {};

  constructor(private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
  }

  /**
   * Save book in DB
   */
  saveBook() {
    this.bookService.saveBook(this.book)
      .subscribe(res => {
        const id = res['id'];
        this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log('Error while saving book: ' + err);
      });
  }
}
