import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IUser } from './user.model';

@Injectable()
export class UserAuthService {
  newUser: IUser = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }; // IUser;

  constructor(private http: Http) {}

  signUpUser( first_name: string, last_name: string, email: string, password: string) {
    this.newUser.first_name = first_name;
    this.newUser.last_name = last_name;
    this.newUser.email = email;
    this.newUser.password = password;
    // let headers = new Headers({
    //     'Content-Type': 'application/json'
    // });
    // let options = new RequestOptions({headers: headers});
  }

  isAuthenticated() {
    return !!this.newUser;
  }

}
