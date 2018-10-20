import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonNewPersonComponent } from './person-new-person/person-new-person.component';
import { PersonEditPersonComponent } from './person-edit-person/person-edit-person.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    PersonNewPersonComponent,
    PersonEditPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
