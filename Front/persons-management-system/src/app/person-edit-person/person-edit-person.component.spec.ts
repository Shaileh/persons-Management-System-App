import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditPersonComponent } from './person-edit-person.component';

describe('PersonEditPersonComponent', () => {
  let component: PersonEditPersonComponent;
  let fixture: ComponentFixture<PersonEditPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEditPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
