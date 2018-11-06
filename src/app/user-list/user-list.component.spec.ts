import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { PersonRowComponent } from '../person-row/person-row.component';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent, PersonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have a user-row', () => {
    let de = fixture.debugElement.query(By.css('app-person-row'));
    expect(de).toBeTruthy();
  });
  it('Should raise the event when click', () => {
    let de = fixture.debugElement.query(By.css('app-person-row .btnSelected'));
    de.triggerEventHandler('click', null);

    fixture.detectChanges();
    expect(component.selectedUser.name).toBe('Jorge');
  });
});
