import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { PersonRowComponent } from '../person-row/person-row.component';
import { UserService } from '../user.service';
import { HttpModule } from '@angular/http';
import { of } from 'rxjs';
import { User } from '../user';
import { By } from '@angular/platform-browser';


describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent, PersonRowComponent ],
      imports: [HttpModule],
      providers: [{provide: UserService, useClass: UserService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
  });
  

  it('should create', () => {
    fixture.detectChanges();
    //Asserts
  expect(component).toBeTruthy();
});

it('should call getAllUsers method', () => {
  let mockUsers =  of([
    new User('valentina','asdas@go.co','12312'),
    new User('nicolas','asdas@jiji','12312'),
    new User('zuleta','asdas@zu','12312')
]);

  spyOn(userService,'getAllUsers').and.returnValue(mockUsers);
  fixture.detectChanges();
  //Asserts

expect(component.users.length).toBe(3);
expect(userService.getAllUsers).toHaveBeenCalled();
/*    expect(userService.getAllUsers).toHaveBeenCalledTimes(1);
expect(userService.getAllUsers).toHaveBeenCalledWith(1); */
});


describe('test for getUser', () => {

  it('should the users[0] be an user ', () => {
    fixture.detectChanges();
    let mockUsers =  of(
      new User('fernando','asdas@go.co','12312'),
  );
    spyOn(userService,'getUser').and.returnValue(mockUsers);
    //Asserts
    component.getUser(3);
    expect(component.users[0].name).toBe('fernando');
/*    expect(userService.getAllUsers).toHaveBeenCalledTimes(1);
  expect(userService.getAllUsers).toHaveBeenCalledWith(1); */
  });

  it('should call getUser method', () => {
    fixture.detectChanges();
    let mockUsers =  of(
      new User('fernando','asdas@go.co','12312'),
  );
    spyOn(userService,'getUser').and.returnValue(mockUsers);
    //Asserts
    component.getUser(3);
    expect(userService.getUser).toHaveBeenCalled();
    expect(userService.getUser).toHaveBeenCalledWith(3);
  });
});


  it('should call selected', () => {
    let mockUsers =  of([
      new User('valentina','asdas@go.co','12312'),
      new User('nicolas','asdas@jiji','12312'),
      new User('zuleta','asdas@zu','12312')
  ]);

    spyOn(userService,'getAllUsers').and.returnValue(mockUsers);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('app-person-row .btnSelected'));
    de.triggerEventHandler('click', null);

    fixture.detectChanges();
    expect(component.selectedUser.name).toBe('valentina');
  })
});
