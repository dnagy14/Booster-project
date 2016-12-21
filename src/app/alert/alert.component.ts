import { Component, OnInit } from '@angular/core';
import { AlertInterface } from './alert-interface';
import { NotificationService } from '../Shared/notification.service';

@Component({
  selector: 'app-alert',
  template: `
    <p class="notification">
      <ngb-alert *ngFor="let alert of alerts; let i = index" [dismissible]="true" [type]="alert.type" (close)="closeAlert(i)">{{ alert.message }}</ngb-alert>
    </p>
  ` ,
styleUrls: ['./alert.component.sass'],

})
export class AlertComponent implements OnInit {

  private alerts = [];

  constructor( private notificationService: NotificationService ) {
  }

  ngOnInit() {
    this.notificationService.alertObs$.subscribe(
      (res) => {
        this.alerts = res;
      }
    );
  }

  closeAlert(alert) {
    this.notificationService.closeAlert(alert);
  }
}
