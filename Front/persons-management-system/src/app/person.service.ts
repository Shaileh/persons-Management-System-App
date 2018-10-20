import { Injectable } from '@angular/core';
import {Person} from './person';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class PersonService {

  constructor(private http: HttpClient) { }

getHeroes(): Observable <Person[]> {
  let df = this.http.get<Person[]>('http://localhost:3000/persons');
  console.log(df);
  return df;
}
}
