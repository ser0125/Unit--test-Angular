import { TestBed, fakeAsync, inject, tick } from '@angular/core/testing';

import { UserService } from './user.service';
import { BaseRequestOptions, Http, ConnectionBackend, ResponseOptions, Response, RequestMethod } from '@angular/http';
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
            dataResponse = response;
          });
          tick();
        
          //Assert
          expect(dataResponse.id).toBeDefined();
          expect(dataResponse.name).toBeDefined();
          expect(dataResponse.address).toBeDefined();
     }))
     );

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

  describe('Test for createUser', () => {
    it("Should return a new user",
     inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
      let dataResponse, dataError;
      let userMock = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      }
      let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
      mockBackend.connections.subscribe(
        (connection) => {
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users');
          connection.mockRespond(new Response(mockResponse));
        });
        let newUser = {
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz"
        };
        userService.createUser(newUser).subscribe(
          response => {
            dataResponse = response;
          });
          tick();
        
          //Assert
          expect(dataError).toBeUndefined();
          expect(dataResponse.id).toBeDefined();
          expect(dataResponse.name).toEqual('Leanne Graham');
          expect(dataResponse.username).toEqual('Bret');
          expect(dataResponse.email).toEqual('Sincere@april.biz');
     }))
     );

     it("Should return a new user",
     inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
      let dataResponse, dataError;
      let userMock = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      }
      let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
      mockBackend.connections.subscribe(
        (connection) => {
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users');
          connection.mockError(new Error('Error'));
        });
        let newUser = {
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz"
        };
        userService.createUser(newUser).subscribe(
          response => {
            dataResponse = response;
          }, error => {
            dataError = error;
          });
          tick();
        
          //Assert
          expect(dataError).toBeDefined();
          expect(dataResponse).toBeUndefined();
       
     }))
     );

     
  });

  describe('Test for updateUser', () => {
    it("Should return an user updated",
     inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
      let dataResponse, dataError;
      let userMock = {
        "id": 12,
        "name": "Sergio Llanos",
        "username": "Bret",
        "email": "Sincere@april.biz"
      }
      let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
      mockBackend.connections.subscribe(
        (connection) => {
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/12');
          connection.mockRespond(new Response(mockResponse));
        });
        let userUpdated = {
          "id": 12,
          "name": "Sergio Llanos",
          "username": "Bret",
          "email": "Sincere@april.biz"
        };
        userService.updateUser(userUpdated).subscribe(
          response => {
            dataResponse = response;
          });
          tick();
        
          //Assert
          expect(dataError).toBeUndefined();
          expect(dataResponse.id).toBeDefined();
          expect(dataResponse.name).toEqual('Sergio Llanos');
          expect(dataResponse.username).toEqual('Bret');
          expect(dataResponse.email).toEqual('Sincere@april.biz');
     }))
     );

     it("Should return an error when I updated",
     inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
      let dataResponse, dataError;
      let userMock = {
        "id": 12,
        "name": "Sergio Llanos",
        "username": "Bret",
        "email": "Sincere@april.biz"
      }
      let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
      mockBackend.connections.subscribe(
        (connection) => {
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/12');
          connection.mockError(new Error('Error'));
        });
        let updatedUser = {
          "id": 12,
          "name": "Sergio Llanos",
          "username": "Bret",
          "email": "Sincere@april.biz"
        };
        userService.updateUser(updatedUser).subscribe(
          response => {
            dataResponse = response;
          }, error => {
            dataError = error;
          });
          tick();
        
          //Assert
          expect(dataError).toBeDefined();
          expect(dataResponse).toBeUndefined();
       
     }))
     );

     
  });

  describe('Test for deleteUser', () => {
    it("Should return a success message",
     inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
      let dataResponse, dataError, dataUrl, dataMethod, dataToken;
      let successMock = {
        "message":"Se elimino el registro de forma adecuada"
      }
      let mockResponse = new ResponseOptions({body: JSON.stringify(successMock)});
      mockBackend.connections.subscribe(
        (connection) => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          dataToken = connection.request.headers.get('API-TOKEN')
          connection.mockRespond(new Response(mockResponse));
        });
        userService.deleteUser(12).subscribe(
          response => {
            dataResponse = response;
          });
          tick();
          //Assert
          expect(dataResponse.message).toEqual("Se elimino el registro de forma adecuada");
          expect(dataUrl).toEqual('http://jsonplaceholder.typicode.com/users/12');
          expect(dataMethod).toBe(RequestMethod.Delete);
          expect(dataToken === null).toBeFalsy();
     }))
     );

     it("Should return an error when I delete",
     inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
      let dataResponse, dataError;
      let successMock = {
        "message":"Se elimino el registro de forma adecuada"
      }
      let mockResponse = new ResponseOptions({body: JSON.stringify(successMock)});
      mockBackend.connections.subscribe(
        (connection) => {
          expect(connection.request.url).toBe('http://jsonplaceholder.typicode.com/users/12');
          connection.mockError(new Error('Error'));
        });
        userService.deleteUser(12).subscribe(
          response => {
            dataResponse = response;
          }, error => {
            dataError = error;
          });
          tick();
        
          //Assert
          expect(dataError).toBeDefined();
          expect(dataResponse).toBeUndefined();
       
     }))
     ); 

     
  });


  describe('Test for getAllUsers', () => {
    it("Should return all the user's data",
     inject([UserService, MockBackend], fakeAsync((userService, mockBackend: MockBackend)=>{
      let dataResponse, dataUrl, dataMethod, dataToken;
      let userMock = [
        {
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
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        }
      ];
      let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});
      mockBackend.connections.subscribe(
        (connection) => {
          dataUrl = connection.request.url;
          dataMethod = connection.request.method;
          dataToken = connection.request.headers.get('API-TOKEN');
          connection.mockRespond(new Response(mockResponse));
        });
        userService.getAllUsers().subscribe(
          response => {
            dataResponse = response;
          });
          tick();
        
          //Assert
          expect(dataResponse.length).toBe(3);
          expect(dataUrl).toBe('http://jsonplaceholder.typicode.com/users');
          expect(dataMethod).toBe(RequestMethod.Get);
          expect(dataToken === null).toBeFalsy();

     }))
     );

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

});
