import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component ({
    selector: 'search-box',
    template: `
        <div>
            <input #input type="text" (input)="update.emit(input.value)"> 
        </div>
    `
})

export class SearchBox implements OnInit {
    @Output() update = new EventEmitter();

    ngOnInit() {
        this.update.emit(''); // start with an empty string
    }
}