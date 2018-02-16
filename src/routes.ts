import { Routes } from '@angular/router';
import { BookComponent } from './app/book/book.component';
import { BookDetailComponent } from './app/book-detail/book-detail.component';
import { BookCreateComponent } from './app/book-create/book-create.component';
import { BookEditComponent } from './app/book-edit/book-edit.component';

export const appRoutes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List'}
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: {title: 'Book Details'}
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: {title: 'Create Book'}
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: {title: 'Edit Book'}
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];
