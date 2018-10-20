import { Component, OnInit , Input} from '@angular/core';

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
  person:Person;
  constructor(private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getPerson();
  }
  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.personService.getPerson(id)
      .subscribe(toEdit => this.person = toEdit);
  }
}
}
