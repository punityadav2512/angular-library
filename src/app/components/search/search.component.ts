import { Component } from '@angular/core';
import { ViewChild} from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material/table';
import { BookService } from 'src/app/services/book.service';

export interface data{
  numFound: number;
  docs: Array<any>;
}
const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private bookService: BookService){}
  page = 1;
  pageSize = 10;
  selectPage(page: string) {
		this.page = parseInt(page, 10) || 1;
	}

	formatInput(input: HTMLInputElement) {
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}


  title: string = '';
  authorName: string = '';
  searching: number= 0;
  clearTitle() {
    this.title = '';
  }
  clearAuthorName(){
    this.authorName = '';
  }
  bookOutput: number = 0 
  booksArray: Array<any> = []
 

  getBook(title: string, authorName: string){
    this.searching = 1;
    this.authorName = authorName?? '';
    this.title = title ?? '';
    this.bookService.getBookByTitleOrAuthor(this.title, this.authorName).subscribe(
      (data: data) => {
        this.bookOutput = data.numFound;
        this.booksArray = data.docs;
        console.log(this.booksArray);
        this.searching = 2;
      });
  }
 

}


