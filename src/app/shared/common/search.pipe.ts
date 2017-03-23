import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPipe',
    pure: false
})

export class SearchPipe implements PipeTransform{

    transform(value: any, term:any) {
        //check if searchTerm is undefined
        if(term === undefined) {
            return value
        } else {
            value.filter( item => item.name.indexOf(term) !== -1)
        }
    }
}


// transform(data: any[], searchTerm: string): any[] {
//       searchTerm = searchTerm.toUpperCase();
//       return data.filter(item => {
//         return item.toUpperCase().indexOf(searchTerm) !== -1 
//       });
//   }