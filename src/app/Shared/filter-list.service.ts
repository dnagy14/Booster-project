import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterListService {

  searchInputValue;
  searchSelectValue;

  constructor() { }

  sendInputValue(value) {
    this.searchInputValue = value;
  }

  getInputValue() {
    return this.searchInputValue;
  }

  sendSelectValue(value) {
    this.searchSelectValue = value;
  }

  getSelectValue() {
    return this.searchSelectValue;

  }

}
