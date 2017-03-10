import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IUser } from './user.model';

@Injectable()
export class UserAuthService {
  authToken: any;
  user: any;
  newUser: IUser = {
    username: '',
    email: '',
    password: ''
  }; // IUser;

  constructor(private http: Http) {}

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res.json())
  }

  // validation emails can be moved out to validation service;
  authenticateUser(user) {
    if (user.username === undefined || user.email === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  signUpUser( username: string, email: string, password: string) {
    this.newUser.username = username;
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
