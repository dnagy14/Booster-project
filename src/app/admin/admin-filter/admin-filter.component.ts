import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { FilterListService } from '../../Shared/filter-list.service';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.sass'],
})
export class AdminFilterComponent implements OnInit {

  searchInputValue;
  searchSelectValue;

  constructor( private filterlistService: FilterListService ) {
   }

  ngOnInit() {
  }

  onKeyUp(value) {
    this.filterlistService.sendInputValue(value);
  }

  filterListStatus(value) {
    this.filterlistService.sendSelectValue(value);
  }

}
