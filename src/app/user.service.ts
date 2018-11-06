import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: Http) { }

  getAllUsers(){
    return this.http.get(`${this.path}`, this.makeOptions()).pipe(
      map(response => response.json()));
  }

  getUser(id: number): Observable<any>{
    return this.http.get(`${this.path}/${id}`).pipe(
    map(response => response.json()));
  }

  createUser(user){
    let data = JSON.stringify(user);
    return this.http.post(`${this.path}`, data).pipe(
      map(response => response.json()));
  }

  updateUser(user){
    let id = user.id;
    let data = JSON.stringify(user);
    return this.http.put(`${this.path}/${id}`, data).pipe(
      map(response => response.json()));
  }

  deleteUser(id: number){
    return this.http.delete(`${this.path}/${id}`, this.makeOptions()).pipe(
      map(response => response.json()));
  }

  makeOptions(){
    let headers = new Headers();
    headers.append('API-TOKEN','xxx777');
    return {
      headers: headers
    };
  }
}
