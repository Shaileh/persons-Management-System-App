import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonNewPersonComponent } from './person-new-person.component';

describe('PersonNewPersonComponent', () => {
  let component: PersonNewPersonComponent;
  let fixture: ComponentFixture<PersonNewPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonNewPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonNewPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
