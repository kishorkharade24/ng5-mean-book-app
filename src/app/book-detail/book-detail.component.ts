import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  /**
   * Get book details
   * @param id
   */
  getBookDetail(id) {
    this.bookService.getBookDetail(id)
      .subscribe(data => {
        this.book = data;
      }, (err) => {
        console.log('Error while getting book details: ' + err);
      });
  }

  /**
   * Delete book
   * @param id
   */
  deleteBook(id) {
    this.bookService.deleteBook(id)
      .subscribe(res => {
        this.router.navigate(['/books']);
      }, (err) => {
        console.log(err);
      });
  }
}
