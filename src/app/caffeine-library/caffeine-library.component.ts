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

  // maxSize:number = 5;
  // bigTotalItems:number = 726;
  // bigCurrentPage:number = 1;
  // numPages:number = 0;
  // itemsPerPage: number = 10;
 
  // public totalPagerItems = 766;
  // public currentPagerPage = 3;
  // public smallnumPagerPages = 0;
  // public noOfItemsPerPage = 10;
  // public totalItems = [];
  // public listItems = [];


//   public buildPageContents() {
//     let newArray = [];
//     let startItem = (this.currentPagerPage - 1) * this.noOfItemsPerPage
//     for(let i=0; i < this.noOfItemsPerPage; i++ ) {
//       if(this.totalItems[startItem+i])
//       newArray.push(this.totalItems[startItem+i])
//     }
//     this.listItems = newArray;
//     console.log(this.listItems);
//   }

//    public increasePageItems() {
//     this.noOfItemsPerPage++;
//     this.buildPageContents(); 
//   }
  
//  public decreasePageItems() {
//     this.noOfItemsPerPage--;
//     this.buildPageContents(); 
//   }

//    public pageChanged(event: any): void {
//     this.buildPageContents();
//     console.log('Page changed to: ' + event.page);
//     console.log('Number items per page: ' + event.itemsPerPage);
//   }