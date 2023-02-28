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
      return this.http.get('https://openlibrary.org/search.json?title=' + title + '&limit=40');
    }
    else if ((!title || title.length < 2) && (author && author.length >= 2)) {
      return this.http.get('https://openlibrary.org/search.json?author=' + author + '&limit=40');
    }
    else {
      return this.http.get('https://openlibrary.org/search.json?author=' + author + '&title=' + title + '&limit=40');
    }
  }

  getBookBySubject(subject: string, offset: number){
    return this.http.get('https://openlibrary.org/search.json?subject=' + subject + '&limit=10&offset='+ offset);
  }
  // getTopBookSubject(subject: string){
  //   return this.http.get('https://openlibrary.org/subjects/' + subject + '.json');
  // }

  getTop5Subjects(){
    return this.http.get('https://openlibrary.org/search/subjects.json?q=subjects&mode=everything&limit=5');
  }

  getBookByPhrase(phrase: string){
    return this.http.get('https://openlibrary.org/search/inside.json?q=' + phrase + '&limit=10');
  }



}
