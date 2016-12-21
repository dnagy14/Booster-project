import { Component, OnInit } from '@angular/core';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminFilterComponent} from './admin-filter/admin-filter.component';

@Component({
  selector: 'app-admin',
  template: `
      <app-admin-filter></app-admin-filter>
      <app-admin-list></app-admin-list>
  `,
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
