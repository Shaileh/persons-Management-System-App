import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PersonsListComponent} from './persons-list/persons-list.component'
import {PersonNewPersonComponent} from './person-new-person/person-new-person.component'
import {PersonEditPersonComponent} from './person-edit-person/person-edit-person.component'


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'newPerson', component: PersonNewPersonComponent },
  { path: 'list' , component: PersonsListComponent},
  { path: 'editPerson/:id', component: PersonEditPersonComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {

}
