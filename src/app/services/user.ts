import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

  @Injectable()
    export class UserService {
      constructor(private http: HttpClient) { }
      public getByEmail(email: string): Observable<User> {
        return this.http.get<User>('http://localhost:8080/user/by-email/', {
          params: new HttpParams().set('email', email)
        });
      }
}
