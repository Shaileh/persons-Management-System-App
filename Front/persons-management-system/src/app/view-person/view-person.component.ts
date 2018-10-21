import { Component, OnInit ,Input} from '@angular/core';

import {NgForm} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../person'
import { PersonService } from '../person.service'

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  personToView;
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
    .subscribe((personToView) => {
      this.personToView = personToView;
      console.log(`new apprice ${this.personToView.name}`);
    });
  })
  }
  goBack():void {
  this.location.back();
}
}
