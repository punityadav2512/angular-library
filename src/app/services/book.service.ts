import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import {Book} from '../models/Book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }


  getBookByTitleOrAuthor(title: string, author: string){
    if ((title && title.length >= 2) && (!author || author.length < 2)) {
      return this.http.get('https://openlibrary.org/search.json?title=' + title);
    }
    else if ((!title || title.length < 2) && (author && author.length >= 2)) {
      return this.http.get('https://openlibrary.org/search.json?author=' + author);
    }
    else {
      return this.http.get('https://openlibrary.org/search.json?author=' + author + '&title=' + title);
    }
  }

  getBookBySubject(subject: string){
    return this.http.get('https://openlibrary.org/search.json?subject=' + subject);
  }



}
