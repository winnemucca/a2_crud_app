import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class UserCaffListService {
    user: any;

    constructor(private http: Http) {}

    postUserDrinkList(user) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/userCaffeineList/addDrink', user, {headers: headers})
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
