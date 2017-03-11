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
      .map(res => res.json());
  }

  // validation emails can be moved out to validation service;
  authenticateUser(user) {
    if (user.username === undefined || user.email === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  authenticateUserLogin(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }
  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res.json());
  }

  loadToken() { // can access class property throughout class
    const token = localStorage.getItem('id_token');
    this.authToken = token;
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

  storeUserData (token, user) {
    localStorage.setItem('id_token', token );
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    console.log(localStorage);
  }

  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
