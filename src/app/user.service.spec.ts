import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';

import { UserService } from './user.service';
import { BaseRequestOptions, Http, ConnectionBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('UsersService', () => {
  //Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        UserService,
        { 
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
      ]
    });
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  describe('Test for getUser', () => {
    it("Should return the user's data with an id",
     inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
      let dataResponse;
      let userMock = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
      let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
      mockBackend.connections.subscribe(
        (connection) => {
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
          connection.mockRespond(new Response(mockResponse));
        });
        userService.getUser(1).subscribe(
          response => {
            console.log(response);
            dataResponse = response;
          });
          tick();
        
          //Assert
          expect(dataResponse.id).toBeDefined();
          expect(dataResponse.name).toBeDefined();
          expect(dataResponse.address).toBeDefined();
     }))
     );
  });

  it("Should return the user's data when the server's fail",
  inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
   let dataResponse, dataError;
   let userMock = {
     "id": 1,
     "name": "Leanne Graham",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
     }
   }
   let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
   mockBackend.connections.subscribe(
     (connection) => {
       expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/1');
       connection.mockError(new Error('error'));
     });
     userService.getUser(1).subscribe(
       response => { //success
         dataResponse = response;
       }, error => { //Error
        dataError = error;
       });
       tick();
     
       //Assert
       expect(dataResponse).toBeUndefined();
       expect(dataError).toBeDefined();
  }))
  );
});
