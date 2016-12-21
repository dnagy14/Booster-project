import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { NotificationService } from '../Shared/notification.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass'],
})
export class CustomerComponent implements OnInit {

  name;
  email;
  make;
  model;
  year;
  fuel;
  plate;
  status;
  vehicles = [];
  uniqueSet;
  uniqueVehicle = [];

  constructor(
    private apiservice: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getVehicles();
    this.status = 'active';

  }

  getVehicles() {
    this.apiservice.getVehicles().subscribe(
      (res) => {
        console.log('Vehicles imported!');
        this.vehicles = res;
      }, (err) => {
        console.error(err);
      }
    );
  }

  onSubmit(value) {
    this.apiservice.sendRequest(value).subscribe(
      (res) => {
        console.log('Request sent!');
        console.log(res);
      }, (err) => {
        console.error(err);
      }
    );
    this.notificationService.newAlert('info', 'New request');
  }

  uniqueMake() {
    return (new Set(this.vehicles.map(item => item.make)));
  }

  getModels(make) {
    return (new Set(make.map(item => item.model)));
  }

}
