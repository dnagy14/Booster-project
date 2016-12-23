import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSelectTable'
})
export class FilterSelectTablePipe implements PipeTransform {

  transform(requests: any, term: any): any {
    if ( term === undefined || term === 'ALL') {return requests; }
    return requests.filter( (request) => {
      return request.requestStatus.toLowerCase().includes(term.toLowerCase());
      });
}
}
