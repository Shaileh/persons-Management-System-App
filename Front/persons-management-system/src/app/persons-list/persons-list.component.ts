import { Component, OnInit } from '@angular/core';
import {Person} from '../person'
import {PersonService} from '../person.service'

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  persons: Person[];
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
  this.personService.getHeroes()
      .subscribe((heroes) => {this.persons = heroes
      console.log(heroes)});
      console.log(this.persons);
}
}
