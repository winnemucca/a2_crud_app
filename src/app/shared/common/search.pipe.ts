import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe {

    transform(value, [term]) {
        return value.filter( item => item.name.startsWith(term))
    }
}