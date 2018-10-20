import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
  })
};
const httpURL = 'http://localhost:3000/persons';

@Injectable({
  providedIn: 'root'
})


export class PersonService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(httpURL);
  }

  getPerson(id:string): Observable<Person[]> {
    return this.http.get<Person[]>(`${httpURL}/${id}`);
  }

  addPerson(person:Person): Observable<Person> {
    return this.http.post<Person>(`${httpURL}`,person,httpOptions);
  }

  deletePerson(id:string): Observable<Person> {
    return this.http.delete<Person>(`${httpURL}/${id}`,httpOptions);
  }

}
