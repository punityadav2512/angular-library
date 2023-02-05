import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './components/table/table.component';
import {MatButtonModule} from '@angular/material/button';


import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FooterComponent } from './components/footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { SubjectComponent } from './components/subject/subject.component';
import { HomeComponent } from './components/home/home.component';
import { RocketComponent } from './components/rocket/rocket.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    SubjectComponent,
    HomeComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    DecimalPipe, 
    NgFor, 
    FormsModule,
    ReactiveFormsModule, 
    NgbTypeaheadModule, 
    NgbPaginationModule, 
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTableModule, 
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
