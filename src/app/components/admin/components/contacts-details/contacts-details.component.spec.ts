import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDetailsComponent } from './contacts-details.component';

describe('ContactsDetailsComponent', () => {
  let component: ContactsDetailsComponent;
  let fixture: ComponentFixture<ContactsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
