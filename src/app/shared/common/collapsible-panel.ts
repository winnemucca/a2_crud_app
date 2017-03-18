import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-panel',
    template: ` 
        <div class="panel-body panel-body-custom" (click)="toggleContent()">
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `
})

export class CollapsiblePanelComponent {
    //@Input() name: string;
    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}