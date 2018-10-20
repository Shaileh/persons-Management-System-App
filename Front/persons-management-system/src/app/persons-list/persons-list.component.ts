import { Component, OnInit } from '@angular/core';
import { Person } from '../person'
import { PersonService } from '../person.service'
import {PersonEditPersonComponent} from '../person-edit-person/person-edit-person.component'

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons: Person[];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons()
      .subscribe((persons) => { this.persons = persons
      console.log(typeof persons[0]._id);});

  }

  onDelete(id:string): void {
    this.personService.deletePerson(id)
    .subscribe((persons) => { console.log(id) });
    this.getPersons();
  }

  toEditPerson:Person;
  toEdit(person:Person):void{
    toEditPerson = person;
  }

}
