import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
