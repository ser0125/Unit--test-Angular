import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRowComponent } from './person-row.component';
import { User } from '../user';
import { By } from '@angular/platform-browser';

describe('PersonRowComponent', () => {
  let component: PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;
    component.user = new User('Sersh','sersh@gmail.com','1231512');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the name be "Sersh"', () => {
    expect(component.user.name).toEqual("Sersh");
  });

  it('should the name be "Sersh" in template', () => {
    //Arrange
    let de = fixture.debugElement.query(By.css('h5'));
    let el = de.nativeElement;
    //Assert
    expect(el.textContent).toEqual('Sersh');
  });

  it('should show the email when i click a button', () => {
    //Arrange
    let button = fixture.debugElement.query(By.css('.btn'));
    let de = fixture.debugElement.query(By.css('.userEmail'));
    let el = de.nativeElement;
    button.triggerEventHandler('click', null);

    fixture.detectChanges();

    //Assert
    expect(el.textContent).toEqual('sersh@gmail.com');
  });
});
