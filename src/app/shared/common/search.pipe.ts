import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPipe',
    pure: false
})

export class SearchPipe implements PipeTransform{

    transform(items: any, term:any) {
        //check if searchTerm is undefined
        if(term === undefined) {
            return items;
        } else {
            return items.filter( item => item.name.toLowerCase().includes(term.toLowerCase()) );
        }
    }
}


// transform(data: any[], searchTerm: string): any[] {
//       searchTerm = searchTerm.toUpperCase();
//       return data.filter(item => {
//         return item.toUpperCase().indexOf(searchTerm) !== -1 
//       });
//   }