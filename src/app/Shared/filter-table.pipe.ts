import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(requests: any, term: any): any {
    console.log(term);
    if ( term === undefined) {return requests; }
    return requests.filter( (request) => {
      return request.vehiclePlate.toLowerCase().includes(term.toLowerCase());
      });
}
}
