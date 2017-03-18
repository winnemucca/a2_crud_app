import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-panel',
    template: ` 
        <div class="panel-body panel-body-custom">
            <div class="text-left">
                <i class="fa fa-minus" aria-hidden="true" (click)="toggleContent()"></i>
            </div>
            <ng-content *ngIf="visible" select="[drink-info]"> </ng-content>
            <ng-content *ngIf="visible" select="[select-drink]"></ng-content>
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