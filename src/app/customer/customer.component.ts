import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { NotificationService } from '../Shared/notification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass'],
})
export class CustomerComponent implements OnInit {

  customerFirstName;
  customerLastName;
  email;
  vehicleMake;
  vehicleModel;
  vehicleYear;
  fuelType;
  vehiclePlate;
  requestStatus;
  vehicles = [];
  uniqueSet;
  uniqueVehicle = [];
  models = [];
  years = [];
  customerForm;

  constructor(
    private apiservice: ApiService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {

    this.customerForm = new FormGroup({
      customerFirstName: new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-ZŠĐČĆŽčšđžć]+$/)
      ]),
      customerLastName: new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-ZŠĐČĆŽčšđžć]+$/)
      ]),
      email: new FormControl('', [Validators.required,
        Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)
      ]),
      vehicleMake: new FormControl('', [Validators.required]),
      vehicleModel: new FormControl('', [Validators.required]),
      vehicleYear: new FormControl('', [Validators.required]),
      fuelType: new FormControl('', [Validators.required]),
      requestStatus: new FormControl('ACTIVE', [Validators.required]),
      vehiclePlate: new FormControl('', [Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ])
    });

    this.getVehicles();
  }

  getVehicles() {
    this.apiservice.getVehicles().subscribe(
      (res) => {
        // console.log('Vehicles imported!');
        this.vehicles = res;
      }, (err) => {
        // console.error(err);
      }
    );
  }

  onSubmit(value) {
    this.apiservice.sendRequest(value).subscribe(
      (res) => {
        // console.log('Request sent!');
        //  console.log(res);
        this.customerForm.reset();
        this.notificationService.newAlert('info', 'Request sent');
      }, (err) => {
        //  console.error(err);
        this.customerForm.reset();
        this.notificationService.newAlert('danger', 'Request error');
      }
    );

  }

  uniqueMake() {
    return (new Set(this.vehicles.map(item => item.make)));
  }

  selectModels(x) {
    this.models.length = 0;
    this.models = (this.vehicles.filter(item => item.make === x.slice(3)));
    this.uniqueModels();
  }

  uniqueModels() {
    return (new Set(this.models.map(item => item.model)));
  }

  selectYears(x) {
    this.years.length = 0;
    this.years = (this.vehicles.filter(item => item.model === x.slice(3)));
    this.years.sort(function(a, b) { return b.year - a.year; });
    }

  }
