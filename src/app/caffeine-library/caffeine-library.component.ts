import { Component, OnInit, Input } from '@angular/core'; 

import { CaffeineModel } from './caffeine-model';
import { CaffeineListService } from './caffeine-list.service';

@Component({
  selector: 'app-caffeine-library',
  templateUrl: './caffeine-library.component.html',
  styleUrls: ['./caffeine-library.component.css']
})
export class CaffeineLibraryComponent implements OnInit {
  errorMessage: string;
  caffDrinks: CaffeineModel[]; // assign to this array

  maxSize:number = 5;
  bigTotalItems:number = 726;
  bigCurrentPage:number = 1;
  numPages:number = 0;
  itemsPerPage: number = 10;
 
  

  constructor(private _caffeineListService: CaffeineListService) { }

  ngOnInit(): void {
    this._caffeineListService.getAllCAffeineDrinks()
      .subscribe(
        caffDrinks => this.caffDrinks = caffDrinks,
        error => this.errorMessage = <any> error);

  }



  selectCaffeineDrink(drink) {
    console.log('clicked', drink)
  }

}
