import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book: any = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  /**
   * Get book
   * @param id
   */
  getBook(id) {
    this.bookService.getBookDetail(id)
      .subscribe(data => {
        this.book = data;
      }, (err) => {
        console.log('Error while getting book details: ' + err);
      });
  }

  /**
   * Update book
   * @param id
   * @param data
   */
  updateBook(id, data) {
    this.bookService.updateBook(id, data)
      .subscribe(res => {
        const id = res['id'];
        this.router.navigate(['/book-details', id]);
      }, (err) => {
        console.log('Error while updating book: ' + err);
      });
  }
}
