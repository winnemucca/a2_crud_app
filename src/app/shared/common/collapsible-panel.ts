import { Component, Input, OnChanges, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'collapsible-panel',
    templateUrl: './collapsible-panel.html'
})

export class CollapsiblePanelComponent implements OnChanges, OnInit {

    @Input() drinks;
    @Input() filterBy: string;
    @Input() searchText: string;
    @Input() term: string;

    filteredDrinks = [];
    visible = true;

    ngOnChanges() {
        if (this.drinks) {
            this.filterSessions(this.filterBy);
        }
    }

    ngOnInit() {

    }

    filterSessions(filter) {
        if (filter === 'all') {
            this.filteredDrinks = this.drinks.slice(0);
        } else {
            this.filteredDrinks = this.drinks.filter(drink => {
                // working need to get more
                return drink.name.toLocaleLowerCase().indexOf(filter) !== -1;
            });
        }
    }

    toggleContent(i) {
        console.log(i, this.drinks[i]);
            this.visible = !this.visible;
    }

    selectCaffeineDrink(drink) {
        console.log('clicked', drink);
  }
}
