import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../Shared/api.service';
import { NotificationService } from '../../Shared/notification.service';
import { AdminFilterComponent } from '../admin-filter/admin-filter.component';
import { FilterListService } from '../../Shared/filter-list.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.sass']
})
export class AdminListComponent implements OnInit {

  searchValue;
  requests = [];

  constructor( private apiService: ApiService,
     private notificationService: NotificationService,
     private filterlistService: FilterListService
   ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getRequests().subscribe(
      (res) => {
        this.requests = res;
      }, (err) => {
        // console.error(err);
      }
    );
  }

  updateStatus(request, status) {
    request.requestStatus = status;
    this.apiService.update(request.id, request).subscribe(
      (res) => {
        // console.log(res);
        switch (status) {
          case 'COMPLETED':
            this.notificationService.newAlert('success', 'Request completed');
            break;
          default:
            this.notificationService.newAlert('danger', 'Request cancelled');
        }
      }, (err) => {
        //  console.error(err);
        this.notificationService.newAlert('danger', 'Status change error');
      }
    );
  }

  getSearchValue() {
    return this.filterlistService.getInputValue();
  }

  getSelectValue() {
    return this.filterlistService.getSelectValue();
  }

}
