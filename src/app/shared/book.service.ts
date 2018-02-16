import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  /**
   * Get all books
   * @returns {Observable<any>}
   */
  getAllBooks(): Observable<any> {
    return this.http.get('/book');
  }

  /**
   * Get book details
   * @param id
   * @returns {Observable<Object>}
   */
  getBookDetail(id: any) {
    return this.http.get('/book/' + id);
  }

  /**
   * Delete book
   * @param id
   * @returns {Observable<Object>}
   */
  deleteBook(id: any) {
    return this.http.delete('/book/' + id);
  }

  /**
   * Save book
   * @param book
   * @returns {Observable<any>}
   */
  saveBook(book: any): Observable<any> {
    return this.http.post('/book', book);
  }

  /**
   * Update book
   * @param id
   * @param book
   * @returns {Observable<Object>}
   */
  updateBook(id: any, book: any) {
    return this.http.put('/book/' + id, book);
  }
}
