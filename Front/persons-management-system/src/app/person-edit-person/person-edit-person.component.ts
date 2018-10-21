import { Component, OnInit , Input} from '@angular/core';
import {NgForm} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../person'
import { PersonService } from '../person.service'

@Component({
  selector: 'app-person-edit-person',
  templateUrl: './person-edit-person.component.html',
  styleUrls: ['./person-edit-person.component.css']
})
export class PersonEditPersonComponent implements OnInit {
  personToEdit
  constructor(private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getPerson();
  }
  getPerson(): void {
    var id = this.route.params.subscribe((param) => {
    console.log(`new apprice ${param['id']}`);
    this.personService.getPerson(param['id'])
    .subscribe((personToEdit) => {
      console.log(typeof personToEdit);
      this.personToEdit = personToEdit;
      console.log(`new apprice ${this.personToEdit.name}`);
    });
  })
  }
  editPerson(id: NgForm): void{
    this.personService.editPerson(this.personToEdit._id,id.value)
    .subscribe((edited) => {
      console.log (`This Person was edited ${edited}`);
    });
  }
  goBack():void {
  this.location.back();
}
}
