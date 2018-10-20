import { Component, OnInit ,Input} from '@angular/core';
import {NgForm} from '@angular/forms'
import {Person} from '../person'
import {PersonService} from '../person.service'

@Component({
  selector: 'app-person-new-person',
  templateUrl: './person-new-person.component.html',
  styleUrls: ['./person-new-person.component.css']
})
export class PersonNewPersonComponent implements OnInit {


  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  createNewPerson(newPerson: NgForm):void {
    // console.log(newPerson.value);
    this.personService.addPerson(newPerson.value)
    .subscribe((value) => {
      console.log(`addPerson ${value}`);
    })
  }

}
