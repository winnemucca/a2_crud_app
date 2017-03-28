import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { CaffeineModel } from './caffeine-model';
import { CaffeineListService } from './caffeine-list.service';
import { UserCaffListService } from '../shared/services/user-caffeine-list.service';

@Component({
  selector: 'app-caffeine-library',
  templateUrl: './caffeine-library.component.html',
  styleUrls: ['./caffeine-library.component.css']
})
export class CaffeineLibraryComponent implements OnInit, OnChanges {
  errorMessage: string;
  caffDrinks: CaffeineModel[]; // assign to this array
  filterBy = 'all';
  visibleCaffDrinks: CaffeineModel[];

  constructor(private _caffeineListService: CaffeineListService, _userCaffService: UserCaffListService) { }


  ngOnInit(): void {
    this._caffeineListService.getAllCAffeineDrinks()
      .subscribe(
        caffDrinks => this.caffDrinks = caffDrinks,
        error => this.errorMessage = <any> error);

  }

  ngOnChanges() {
    if (this.caffDrinks) {
      this.filterCaffeineDrinks(this.filterBy);
    }
  }

  filterCaffeineDrinks(filter) {
    if (filter === 'all') {
      this.visibleCaffDrinks = this.caffDrinks.slice(0);
    } else {
      this.visibleCaffDrinks = this.caffDrinks.filter(drink => {
        console.log('drink', drink);
        return drink.name.toLocaleLowerCase() === filter;
      });
    }
  }


}
