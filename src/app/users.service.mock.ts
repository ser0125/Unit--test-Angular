import { of, Observable } from "rxjs";
import { User } from "./user";

export class MockUserService{
    getAllUsers(): Observable<User[]>{
        return of([
            new User('valentina','asdas@go.co','12312'),
            new User('nicolas','asdas@jiji','12312'),
            new User('zuleta','asdas@zu','12312')
        ]);
    }
}