import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'collapsible-panel',
    templateUrl: './collapsible-panel.html'
})

export class CollapsiblePanelComponent implements OnChanges{
    @Input() drinks;
    @Input() filterBy: string;
    filteredDrinks = [];
    visible: boolean = true;

    ngOnChanges() {
        if(this.drinks) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if(filter === 'all') {
            this.filteredDrinks = this.drinks.slice(0);
        } else {
            this.filteredDrinks = this.drinks.filter(drink => {
                return drink.name.toLocaleLowerCase() === filter;
            })
        }
    }

    toggleContent(i) {
        console.log(i, this.drinks[i]);
            this.visible = !this.visible;
    }

    selectCaffeineDrink(drink) {
        console.log('clicked', drink)
  }
}