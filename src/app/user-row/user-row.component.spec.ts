import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserRowComponent } from './user-row.component';
import { Person } from '../person';

describe('Test for UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      declarations: [ UserRowComponent ], // declare the test component
    })
    .compileComponents();
}));

beforeEach(()=>{
  fixture = TestBed.createComponent(UserRowComponent);
  component = fixture.componentInstance;

  component.person = new Person(
    'Sergio', 'Llanos', 23, 60, 1.70
  );
});

it('Should created', ()=>{
  expect(component).toBeTruthy();
});

it('Should the name be "Sergio"', ()=>{
  expect(component.person.name).toEqual('Sergio');
});

it('Should the age be "23"', ()=>{
  expect(component.person.age).toEqual(23);
});

it('Should the name be "Sergio" in template', ()=>{
  let de = fixture.debugElement.query(By.css('h1'));
  let element = de.nativeElement;
  fixture.detectChanges();
  expect(element.textContent).toContain('Sergio');
});

it('Should the name be "Otro nombre" in template when I change', ()=>{
  let de = fixture.debugElement.query(By.css('h1'));
  let element = de.nativeElement;
  component.person.name = "Otro nombre"
  fixture.detectChanges();
  expect(element.textContent).toContain('Otro nombre');
});

it('Should the age be "23" in template', ()=>{
  let de = fixture.debugElement.query(By.css('.age'));
  let element = de.nativeElement;
  fixture.detectChanges();
  expect(element.textContent).toBe('23');
});



})
