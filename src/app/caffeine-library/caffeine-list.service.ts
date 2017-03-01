import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class CaffeineListService {

  private _caffeineLibraryJSON = 'src/api/caffeine-list.json';

  constructor(private _http: Http) { }

  getAllDrinks() {
    return this._http.get(this._caffeineLibraryJSON)
      .map((response: Response) => response.json())
      .do(data => console.log('all: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }
}

