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
  caffDrinks: CaffeineModel[]; // assign to this array

  totalItems: number = 726; // hard code for now.  Need to find dynamic way 
  currentPage: number = 1;
  smallnumPages: number = 0;

  constructor(private _caffeineListService: CaffeineListService) { }

  ngOnInit(): void {
    this._caffeineListService.getAllCAffeineDrinks()
      .subscribe(
        caffDrinks => this.caffDrinks = caffDrinks,
        error => this.errorMessage = <any> error);
          // console.log(this.caffDrinks.length);

  }

  setPage(pageNo: number) {
    this.currentPage = pageNo;
  }

  pageChange(event: any) {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  

}
