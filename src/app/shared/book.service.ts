import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  /**
   * Get all books
   * @returns {Observable<any>}
   */
  getAllBooks(): Observable<any> {
    return this.http.get(environment.serviceUrl + '/book');
  }

  /**
   * Get book details
   * @param id
   * @returns {Observable<Object>}
   */
  getBookDetail(id: any) {
    return this.http.get(environment.serviceUrl + '/book/' + id);
  }

  /**
   * Delete book
   * @param id
   * @returns {Observable<Object>}
   */
  deleteBook(id: any) {
    return this.http.delete(environment.serviceUrl + '/book/' + id);
  }

  /**
   * Save book
   * @param book
   * @returns {Observable<any>}
   */
  saveBook(book: any): Observable<any> {
    return this.http.post(environment.serviceUrl + '/book', book);
  }

  /**
   * Update book
   * @param id
   * @param book
   * @returns {Observable<Object>}
   */
  updateBook(id: any, book: any) {
    return this.http.put(environment.serviceUrl + '/book/' + id, book);
  }
}
