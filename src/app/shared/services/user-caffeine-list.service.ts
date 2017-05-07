import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class UserCaffListService {
    user: any;

    constructor(private http: Http) {}

    postUserDrinkList(drink) {
        let headers = new Headers();
        const idToken = JSON.parse(localStorage.user);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', idToken.id); 
        //i think this will make the //difference
        return this.http.post('http://localhost:3000/userCaffeineList/addDrink/', drink, {headers: headers})
            .map((res: Response) => res.json())
            .do(data => console.log('data: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getUserDrinkList() {

    }

    deleteUserDrinkListItem() {

    }

    updateUserDrinkListItem() {

    }

    private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}
