import { Component, OnInit } from '@angular/core';

import { CaffeineModel } from './caffeine-model';
import { CaffeineListService } from './caffeine-list.service';

@Component({
  selector: 'app-caffeine-library',
  templateUrl: './caffeine-library.component.html',
  styleUrls: ['./caffeine-library.component.css']
})
export class CaffeineLibraryComponent implements OnInit {
  errorMessage: string;
  drinks: CaffeineModel[];

  constructor(private _caffeineListService: CaffeineListService) { }

  ngOnInit(): void {
    this._caffeineListService.getAllDrinks()
      .subscribe(drinks => this.drinks = drinks,
        error => this.errorMessage = <any> error);
  }

}
