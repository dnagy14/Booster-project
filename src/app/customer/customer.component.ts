import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { NotificationService } from '../Shared/notification.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  name;
  email;
  make;
  model;
  year;
  fuel;
  plate;

  constructor(
    private apiservice: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

  onSubmit(value) {
    this.apiservice.sendRequest(value);
    this.notificationService.newAlert('info', 'New request');
  }
}
