import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class UserCaffeieneList {
    user: any;

    constructor(private http: Http) {}

    getUserDrinkList(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/userCaffeineList/addDrink', user, {headers: headers})
            .map(res => res.json());
    }
}